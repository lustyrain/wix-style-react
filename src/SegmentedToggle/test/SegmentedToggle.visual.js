import React from 'react';
import { storiesOf } from '@storybook/react';
import LockLocked from 'wix-ui-icons-common/LockLocked';
import { Layout, Cell } from 'wix-style-react/Layout';

import SegmentedToggle from '../SegmentedToggle';

const options = [
  { value: 'option1', text: 'Option1' },
  { value: 'option2', text: 'Option2' },
  { value: 'option3', text: 'Option3' },
  { value: 'option4', text: 'Option4' },
];

const defaultProps = { defaultSelected: options[0].value };

const childElementOptions = { button: 'button', icon: 'icon' };

const renderSegmentedButton = ({ value, text, prefixIcon }) => (
  <SegmentedToggle.Button key={value} prefixIcon={prefixIcon} value={value}>
    {text}
  </SegmentedToggle.Button>
);

const renderSegmentedIcon = ({ value, tooltipText }) => (
  <SegmentedToggle.Icon key={value} value={value} tooltipText={tooltipText}>
    <LockLocked />
  </SegmentedToggle.Icon>
);

const renderSegmentedToggle = props => {
  const { options, elementToRender, prefixIcon, ...rest } = props;

  const optionsToRender = [];

  for (let i = 0; i < options.length; i++) {
    if (childElementOptions.button === elementToRender) {
      optionsToRender.push(
        renderSegmentedButton({ ...options[i], prefixIcon }),
      );
    } else {
      optionsToRender.push(
        renderSegmentedIcon({ ...options[i], tooltipText: 'title' }),
      );
    }
  }

  return <SegmentedToggle {...rest}>{optionsToRender}</SegmentedToggle>;
};

const tests = [
  {
    describe: 'Toggle Button',
    its: [
      {
        it: 'enabled',
        props: {
          disabled: false,
          elementToRender: childElementOptions.button,
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
          elementToRender: childElementOptions.button,
        },
      },
      {
        it: 'prefix',
        props: {
          prefixIcon: <LockLocked />,
          elementToRender: childElementOptions.button,
        },
      },
    ],
  },
  {
    describe: 'Icon Button',
    its: [
      {
        it: 'enabled',
        props: {
          disabled: false,
          elementToRender: childElementOptions.icon,
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
          elementToRender: childElementOptions.icon,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SegmentedToggle${describe ? '/' + describe : ''}`, module).add(
      it,
      () => {
        const twoOptions = options.slice(0, 2);

        return (
          <div style={{ width: '1024px' }}>
            <Layout>
              <Cell span={4}>
                {renderSegmentedToggle({
                  options: twoOptions,
                  ...props,
                  ...defaultProps,
                })}
              </Cell>
              <Cell span={6}>
                {renderSegmentedToggle({ options, ...props, ...defaultProps })}
              </Cell>
            </Layout>
          </div>
        );
      },
    );
  });
});

storiesOf(`SegmentedToggle/Toggle Button`, module).add('long text', () => {
  const longTextOptions = [
    { value: 'option1', text: 'Option1' },
    { value: 'option2', text: 'Option2' },
    { value: 'option3', text: 'Option3' },
    {
      value: 'option4',
      text: 'Very long fancy and hardly fitting tab',
    },
  ];

  return (
    <Layout>
      <Cell span={4}>
        {renderSegmentedToggle({
          options: longTextOptions,
          prefixIcon: <LockLocked />,
          elementToRender: childElementOptions.button,
          ...defaultProps,
        })}
      </Cell>
    </Layout>
  );
});
