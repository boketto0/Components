import React, { useState } from 'react';
import { Pagination } from 'antd';

export const PaginationStory7 = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={50} />;
};
