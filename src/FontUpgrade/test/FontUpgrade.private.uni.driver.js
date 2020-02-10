import { FontUpgradeDriverFactory as publicDriverFactory } from '../FontUpgrade.uni.driver';

export const FontUpgradePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
