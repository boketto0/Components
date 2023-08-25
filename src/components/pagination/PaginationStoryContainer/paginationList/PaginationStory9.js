import React from 'react';
import { Pagination } from 'antd';

export const PaginationStory9 = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);