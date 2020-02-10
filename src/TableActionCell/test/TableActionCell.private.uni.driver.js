import { dataHooks } from '../constants';

export const TableActionCellPrivateDriverFactory = base => {
  return {
    // TODO: This unidriver was created mainly for the visual tests, however,
    // we do need to migrate to a public unidriver at some point
    // ...publicDriver,

    clickSecondaryActions: () =>
      base.$(`[data-hook="${dataHooks.triggerElement}"]`).click(),
  };
};
