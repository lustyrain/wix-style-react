import * as React from 'react';

export interface <%= ComponentName %>Props {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class <%= ComponentName %> extends React.PureComponent<<%= ComponentName %>Props>{}
