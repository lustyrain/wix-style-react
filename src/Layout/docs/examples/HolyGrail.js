import React from 'react';

import { Layout, Cell } from 'wix-style-react/Layout';
import Text from 'wix-style-react/Text';

export default () => (
  <div>
    {'<Layout>'}
    <Layout>
      <Cell>{text('<Cell>Header</Cell>')}</Cell>

      <Cell>
        {'<Layout>'}
        <Layout>
          <Cell span={2}>{text('<Cell span={2}><div >Left</div></Cell>')}</Cell>
          <Cell span={8}>
            {text('<Cell span={8}>Middle fluid width</Cell>')}
          </Cell>
          <Cell span={2}>{text('<Cell span={2}><div>Right</div></Cell>')}</Cell>
        </Layout>
        {'</Layout>'}
      </Cell>

      <Cell>{text('<Cell>Footer</Cell>')}</Cell>
    </Layout>
    {'</Layout>'}
  </div>
);

function text(children, style) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        background: '#F0F4F7',
        ...style,
      }}
    >
      <Text>{children}</Text>
    </div>
  );
}
