import { <%= componentName %>DriverFactory as publicDriverFactory } from '../<%= ComponentName %>.uni.driver';

export const <%= componentName %>PrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
