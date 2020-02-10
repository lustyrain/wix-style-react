import React from 'react';
import MultiSelect from '../../src/MultiSelect';

import {
  header,
  title,
  description,
  divider,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import { Container, Row, Col } from 'wix-style-react/Grid';
import FormField from 'wix-style-react/FormField';
import { storySettings } from './storySettings';
import { Category } from '../storiesHierarchy';
import { baseScope } from '../utils/LiveCodeExample';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <Container>
          <Row>
            <Col span={6}>
              <FormField label="Tag Input">
                <MultiSelect
                  tags={[
                    { id: '1', label: 'tag 1' },
                    { id: '2', label: 'tag 2' },
                  ]}
                />
              </FormField>
            </Col>
          </Row>
        </Container>
      ),
    }),

    columns([
      description({
        title: 'Description',
        text:
          'Tag Input is a composition of 2 individual components – `<FormField/>` and `<MultiSelect/>`. Use it when site owner needs to enter multiple keywords. A component for selecting/creating multiple values, and displaying them as tags.',
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Multiselect"
            >{`<MultiSelect/>`}</LinkTo>,
          ],
          [<LinkTo kind={Category.COMPONENTS} story="Tag">{`<Tag/>`}</LinkTo>],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="TextButton"
            >{`<TextButton/>`}</LinkTo>,
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Avatar"
            >{`<Avatar/>`}</LinkTo>,
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    divider(),

    title('Examples'),

    ...[
      {
        title: 'Size',
        text:
          'Tag input can appear in 3 sizes – `small`, `medium` and `large`.',
        source: examples.size,
      },
      {
        title: 'Select Mode',
        text:
          'Tag Input has two select modes – select and type with a keyboard.',
        source: examples.mode,
      },
      {
        title: 'Custom Values',
        text:
          'Tag Input can be set to allow only predefined values, custom values or both.',
        source: examples.customValues,
      },
      {
        title: 'Action',
        text: 'Encourage user interaction by displaying the call to action.',
        source: examples.action,
      },
      {
        title: 'Required',
        text: 'You can add an asterisk if the field is required.',
        source: examples.required,
      },
      {
        title: 'Label Position',
        text:
          'Tag Input’s label can be position on top, left or can be hidden. Additional properties behave accordingly.',
        source: examples.labelPosition,
      },
    ].map(({ title: exampleTitle, text, source }) =>
      columns([description({ title: exampleTitle, text }), code({ source })]),
    ),

    divider(),

    title('Advanced Examples'),

    columns([
      description({
        title: 'Reordering Tags',
        text: 'You can allow reodering tags using drag and drop functionality.',
      }),
      code({ source: examples.reordable }),
    ]),

    columns([
      description({
        title: 'Customizing list',
        text:
          'You can customize options by adding `<ListItemSelect/>` props – size, prefix, suffix and subtitle.',
      }),
      code({ source: examples.customList }),
    ]),
  ],
};
