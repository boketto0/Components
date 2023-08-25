import React from 'react';
import { Dropdown, theme } from 'antd';
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
export const DropdownStory12 = () => {
  const {
    token: { colorBgLayout, colorTextTertiary },
  } = theme.useToken();
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['contextMenu']}
    >
      <div
        style={{
          color: colorTextTertiary,
          background: colorBgLayout,
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        Right Click on here
      </div>
    </Dropdown>
  );
};
