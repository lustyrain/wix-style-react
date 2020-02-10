import addons, { makeDecorator } from '@storybook/addons';
import * as React from 'react';
import { ADDON_ID, ADDON_TITLE } from './shared';
import { useState } from 'react';
import FontUpgrade from '../../../src/FontUpgrade';

const MadeforToggle = makeDecorator({
  name: ADDON_TITLE,
  parameterName: ADDON_TITLE,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context) => {
    const [active, setActive] = useState(false);
    const channel = addons.getChannel();

    channel.on(ADDON_ID + '/change', params => setActive(params.active));

    return <FontUpgrade active={active}>{getStory(context)}</FontUpgrade>;
  },
});

export default MadeforToggle;
