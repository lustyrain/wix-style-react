import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withI18n } from 'storybook-addon-i18n';
import MadeforToggle from './addons/MadeforToggle';
import { version } from '../package.json';
import { create } from '@storybook/theming';

function loadStories() {
  require('./stories.scss');
  require('../stories');
}

const theme = create({
  base: 'light',
  brandTitle: `Wix Style React ${version}`,
  brandUrl: 'https://github.com/wix/wix-style-react',
});

// Parameters
addParameters({
  options: {
    theme,
    showPanel: false,
    isFullscreen: false,
    storySort: undefined,
    isToolshown: true,
  },
  i18n: {
    provider: ({ children }) => <React.Fragment>{children}</React.Fragment>,
    supportedLocales: ['LTR', 'RTL'],
    providerLocaleKey: 'locale',
    getDirection: locale => locale.toLowerCase(),
  },
});

// Decorators
addDecorator(withI18n);
addDecorator(MadeforToggle);

configure(loadStories, module);
