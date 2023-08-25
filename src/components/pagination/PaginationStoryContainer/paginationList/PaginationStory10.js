import React from 'react';
import { Pagination } from 'antd';

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

export const PaginationStory10 = () => <Pagination total={500} itemRender={itemRender} />;
