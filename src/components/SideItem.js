import React from 'react';

const SideItem = () => {
  return (
    <li className="w-full bg-black bg-opacity-50 rounded-md p-4 mb-4">
      <h3 className="font-light text-xl mb-2">GET</h3>
      <div className="break-all text-sm text-white text-opacity-50">https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=5</div>
    </li>
  )
}

export default SideItem;