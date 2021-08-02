import React from 'react';

const SideItem = ({ history }) => {
  console.log(history);
  return (
    <>
      <h3 className="font-light text-xl mb-2">{history.method}</h3>
      <div className="break-all text-sm text-white text-opacity-50">https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=5</div> 
    </>
  )
}

export default SideItem;