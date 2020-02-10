import { EditorState, SelectionState, Modifier, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import { blockTypes, entityTypes } from './RichTextInputAreaTypes';

/** Returns whether the specified style is applied on a block */
const hasStyle = (editorState, style) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return currentStyle.has(style);
};

/** Returns whether a block with the specified type exists */
const hasBlockType = (editorState, blockType) => {
  const selection = editorState.getSelection();
  const currentBlockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return currentBlockType === blockType;
};

/** Returns whether the specified entity is applied on a block */
const hasEntity = (editorState, entity) => {
  const selection = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const currentKey = contentState
    .getBlockForKey(selection.getStartKey())
    .getEntityAt(selection.getStartOffset());

  if (currentKey) {
    const currentEntity = contentState.getEntity(currentKey);

    return currentEntity.type === entity;
  }

  return false;
};

/** Returns whether the block of the selected text is linked to an entity */
const hasRemovableEntityInSelection = editorState => {
  if (_hasSelectedText(editorState)) {
    const { contentBlock, startOffset } = _getSelectedBlock(editorState);
    // Finds the entity that's related to the selected text
    const entity = contentBlock.getEntityAt(startOffset);

    if (entity) {
      return true;
    }
  }

  return false;
};

/** Returns an EditorState with the rendered selection.
 * Mainly useful in order to maintain the selection after creating new state */
const keepCurrentSelection = editorState =>
  EditorState.forceSelection(editorState, editorState.getSelection());

/** Returns an EditorState so that the specified style is toggled on the selection */
const toggleStyle = (editorState, toggledStyle) => {
  return RichUtils.toggleInlineStyle(
    keepCurrentSelection(editorState),
    toggledStyle,
  );
};

/** Returns an EditorState so that the specified block type is toggled on the selection */
const toggleBlockType = (editorState, toggledBlockType) => {
  return RichUtils.toggleBlockType(
    keepCurrentSelection(editorState),
    toggledBlockType,
  );
};

const toggleLink = (editorState, linkData) => {
  if (hasRemovableEntityInSelection(editorState)) {
    const { contentBlock, startOffset } = _getSelectedBlock(editorState);
    const entity = contentBlock.getEntityAt(startOffset);

    return _removeEntityFromBlock(editorState, contentBlock, entity);
  }

  return _attachLinkEntityToText(editorState, linkData);
};

const getSelectedText = editorState => {
  const { contentBlock, startOffset, endOffset } = _getSelectedBlock(
    editorState,
  );

  return contentBlock.getText().slice(startOffset, endOffset);
};

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();

    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === entityTypes.link
    );
  }, callback);
};

const convertToHtml = editorState => {
  const markupConfig = {
    inlineStyles: {
      ITALIC: {
        element: 'em',
      },
    },
    entityStyleFn: entity => {
      const entityType = entity.get('type').toLowerCase();

      if (entityType === 'link') {
        const { url } = entity.getData();

        return {
          element: 'a',
          attributes: {
            rel: 'noopener noreferrer',
            target: '_blank',
            href: url,
          },
        };
      }
    },
  };

  const html = stateToHTML(editorState.getCurrentContent(), markupConfig);

  // Getting rid of unexceptional extra empty line-breaks manually until it would be adopted and supported by `stateToHTML`:
  // http://github.com/sstur/draft-js-utils/pull/84
  return html.replace(/<p><br>/g, '<p>');
};

const isEditorFocused = editorState => editorState.getSelection().getHasFocus();

/** Returns true in case the editor's content does not contain any block which has a non-default type or text.
    It means that if the user changes the block type before entering any text, the content will be considered as non-empty.
 */
const isEditorEmpty = editorState =>
  !editorState.getCurrentContent().hasText() &&
  editorState
    .getCurrentContent()
    .getBlockMap()
    .first()
    .getType() === blockTypes.unstyled;

// Returns whether a text is selected
const _hasSelectedText = editorState =>
  !editorState.getSelection().isCollapsed();

const _getSelectedBlock = editorState => {
  const selection = editorState.getSelection();
  const currentContent = editorState.getCurrentContent();

  // Resolves the current block of the selection
  const anchorKey = selection.getAnchorKey();
  const currentBlock = currentContent.getBlockForKey(anchorKey);

  // Resolves the current block with extra information
  return {
    contentBlock: currentBlock,
    startOffset: selection.getStartOffset(),
    endOffset: selection.getEndOffset(),
    startKey: selection.getStartKey(),
    endKey: selection.getEndKey(),
  };
};

const _attachLinkEntityToText = (editorState, { text, url }) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
    url,
  });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const startPosition = selectionState.getStartOffset();
  const endPosition = startPosition + text.length;

  // A key for the block that containing the start of the selection range
  const blockKey = selectionState.getStartKey();

  // Replaces the content in specified selection range with text
  const contentStateWithText = Modifier.replaceText(
    contentState,
    selectionState,
    text,
  );

  const newSelectionState = new SelectionState({
    anchorOffset: startPosition,
    anchorKey: blockKey,
    focusOffset: endPosition,
    focusKey: blockKey,
  });

  const newEditorState = EditorState.push(
    editorState,
    contentStateWithText,
    'insert-characters',
  );

  return RichUtils.toggleLink(newEditorState, newSelectionState, entityKey);
};

const _removeEntityFromBlock = (editorState, contentBlock, entity) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();

  let selectionWithEntity = null;

  contentBlock.findEntityRanges(
    character => character.getEntity() === entity,
    (start, end) => {
      // Creates a selection state that contains the whole text that's linked to the entity
      selectionWithEntity = selectionState.merge({
        anchorOffset: start,
        focusOffset: end,
      });
    },
  );

  // Removes the linking between the text and entity
  const contentStateWithoutEntity = Modifier.applyEntity(
    contentState,
    selectionWithEntity,
    null,
  );

  const newEditorState = EditorState.push(
    editorState,
    contentStateWithoutEntity,
    'apply-entity',
  );

  return RichUtils.toggleLink(newEditorState, selectionState, null);
};

export default {
  hasStyle,
  hasBlockType,
  hasEntity,
  hasRemovableEntityInSelection,
  toggleStyle,
  toggleBlockType,
  toggleLink,
  getSelectedText,
  findLinkEntities,
  convertToHtml,
  isEditorFocused,
  isEditorEmpty,
};
