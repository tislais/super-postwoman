import React from 'react';
import SideItem from './SideItem';

const Side = () => {
  return (
    <ul className="col-span-4 text-white mt-12 p-8 w-full">
      <SideItem />
      <SideItem />
      <SideItem />
      <SideItem />
      <SideItem />
      <SideItem />
    </ul>
  )
}

export default Side;