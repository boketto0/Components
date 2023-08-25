import './PaginationStory5.css'
import React from 'react';
import { Pagination } from 'antd';

const showTotal = (total) => `Total ${total} items`;

export const PaginationStory5 = () => (
  <>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
);