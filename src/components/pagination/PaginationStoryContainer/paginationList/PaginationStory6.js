import React from 'react';
import { Pagination } from 'antd';

export const PaginationStory6 = () => (
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>
);