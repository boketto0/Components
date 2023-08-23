import './DropdownStory1.css'
import React from "react";
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
export const DropdownStory1 = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a className='dropdown-styles' onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
      </Space>
    </a>
  </Dropdown>
);
