import React from 'react';
import { Pagination } from 'antd';

const onChange = (pageNumber) => {
  console.log('Page: ', pageNumber);
};

export const PaginationStory4 = () => (
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </>
);