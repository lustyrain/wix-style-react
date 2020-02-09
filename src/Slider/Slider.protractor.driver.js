import { dataHooks } from './constants';

export default component => {
  const sliderHandles = () =>
    component.$$(`[data-hook="${dataHooks.sliderHandle}"]`);
  const sliderHandle = index => sliderHandles().get(index);

  const actions = {
    element: () => component,
    exists: () => !!component,

    handleTooltipValue: async ({ index }) => {
      await actions.hoverHandle({ index });
      const tooltip = component.$(`[data-hook="${dataHooks.sliderTooltip}"]`);
      const tooltipText = await tooltip.getText();
      await actions.unHoverHandle({ index });
      return Number(tooltipText);
    },

    isHandleTooltipDisplayed: async () => {
      const toolTipDisplayWrap = await component
        .$$(`[data-hook="${dataHooks.sliderTooltip}"]`)
        .isDisplayed();
      return Boolean(toolTipDisplayWrap[0]);
    },

    hoverHandle: async ({ index }) => {
      await actions.unHoverHandle({ index });

      const handle = sliderHandle(index);
      await browser
        .actions()
        .mouseMove(handle)
        .perform();
    },

    dragHandle: async ({ index, offset }) => {
      const ONE_DOT_MOVEMENT = 64;
      const handle = sliderHandle(index);

      await browser
        .actions()
        .dragAndDrop(handle, { x: offset * ONE_DOT_MOVEMENT, y: 0 })
        .perform();
    },
    unHoverHandle: async ({ index }) => {
      const handle = sliderHandle(index);
      await browser
        .actions()
        .mouseMove(handle)
        .mouseMove({ x: -100, y: -100 })
        .perform();
    },
  };

  return actions;
};
