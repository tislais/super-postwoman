import React from 'react';

const SideItem = ({ history }) => {
  return (
    <>
      <h3 className="font-light text-xl mb-2">{history.method}</h3>
      <div className="break-all text-sm text-white text-opacity-50">{history.url}</div> 
    </>
  )
}

export default SideItem;