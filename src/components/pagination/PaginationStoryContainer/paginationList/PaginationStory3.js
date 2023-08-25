import React from 'react';
import { Pagination } from 'antd';
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};
export const PaginationStory3 = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
);