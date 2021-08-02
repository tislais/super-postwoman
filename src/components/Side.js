import React from 'react';
import SideItem from './SideItem';

const Side = ({ history }) => {
  const historyMap = history.map((history, index) => (
    
    <li key={index} className="w-full bg-black bg-opacity-50 rounded-md p-4 mb-4">
      <SideItem 
        history={history}
      />
    </li>
  ))
  return historyMap;
}

export default Side;