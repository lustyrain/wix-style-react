import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FontUpgrade from '../FontUpgrade';
import { FontUpgradePrivateDriverFactory } from './FontUpgrade.private.uni.driver';
import { FontUpgradeContext } from '../context';

describe('FontUpgrade', () => {
  const render = createRendererWithUniDriver(FontUpgradePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should be active', async () => {
    const text = 'text';
    const { driver } = render(
      <FontUpgrade>
        <div id="wrapper">
          <FontUpgradeContext.Consumer>
            {context => {
              return (
                <div data-active={context.active ? 'active' : null}>{text}</div>
              );
            }}
          </FontUpgradeContext.Consumer>
        </div>
      </FontUpgrade>,
    );

    expect(await driver.getElement('[data-active=active]').exists()).toBe(true);
    expect(await driver.getElement('[data-active=active]').text()).toContain(
      text,
    );
  });

  it('should not be active', async () => {
    const text = 'text';
    const { driver } = render(
      <div id="wrapper">
        <FontUpgradeContext.Consumer>
          {context => {
            return (
              <div data-active={context.active ? 'active' : null}>{text}</div>
            );
          }}
        </FontUpgradeContext.Consumer>
      </div>,
    );

    expect(await driver.getElement('[data-active=active]').exists()).toBe(
      false,
    );
  });
});
