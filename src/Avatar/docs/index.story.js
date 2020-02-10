import React from 'react';
import * as icons from 'wix-ui-icons-common';

import Avatar from '..';
import { storySettings } from './storySettings';

import { avatarColorList } from '../constants';

import {
  api,
  code as baseCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';

import { baseScope } from '../../../stories/utils/LiveCodeExample';
import * as examples from './examples';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

const IMG_REAL_URL = 'https://randomuser.me/api/portraits/women/39.jpg';
const IMG_INVALID_URL = 'https://1234.me/4321.jpg';

const PhotoCamera = icons.PhotoCamera;

const indicationExamples = [
  {
    label: 'Icon',
    value: <PhotoCamera size="24" />,
  },
  {
    label: 'SVG',
    value: (
      <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
        <path
          id="addsmall-a"
          d="M10 9L10 5 9 5 9 9 5 9 5 10 9 10 9 14 10 14 10 10 14 10 14 9z"
        ></path>
      </svg>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Avatar,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    name: 'John Doe',
    placeholder: undefined,
    imgProps: undefined,
    size: undefined,
    color: undefined,
    shape: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
    ariaLabel: 'Avatar for John Doe',
    indication: indicationExamples[0].value,
    presence: undefined,
  },
  exampleProps: {
    onIndicationClick: () => 'Clicked!',
    indication: indicationExamples,
    size: [
      'size90',
      'size72',
      'size60',
      'size48',
      'size36',
      'size30',
      'size24',
      'size18',
    ],
    color: avatarColorList,
    shape: [
      { label: 'circle (default)', value: 'circle' },
      { label: 'square', value: 'square' },
    ],
    imgProps: [
      { label: 'With Image', value: { src: IMG_REAL_URL } },
      { label: 'With Invalid Image URL', value: { src: IMG_INVALID_URL } },
    ],
    placeholderPresence: Object.entries(icons).map(([name, icon]) => ({
      label: name,
      value: React.createElement(icon),
    })),
  },

  sections: [
    header({
      component: <Avatar color="A1" name={'John Doe'} />,

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/blob/master/src/Avatar',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Avatar is a type of element that visually represents a user, either as an image, placeholder or text (name initials)..`,
          ),

          importExample("import Avatar from 'wix-style-react/Avatar';"),

          divider(),

          title('Examples'),

          ...[
            { title: 'Image', source: examples.image },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            {
              title: 'Image Error (Icon Placeholder)',
              source: examples.imageError,
            },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            {
              title: 'Image Error (Initials Placeholder)',
              source: examples.imageErrorInitials,
            },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Size', source: examples.sizes },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          ...[
            { title: 'Square Shape', source: examples.squareShape },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Colors', source: examples.colors },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Placeholder (No name)', source: examples.placeholder },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Custom text', source: examples.customText },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Presence', source: examples.presence },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          ...[
            { title: 'Indication', source: examples.indication },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),

          columns([
            description({ title: 'Click' }),
            code({ source: examples.click }),
          ]),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
