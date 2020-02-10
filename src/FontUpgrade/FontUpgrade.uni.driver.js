import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const FontUpgradeDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base),

    getElement: selector => {
      return base.$(selector);
    },
  };
};
