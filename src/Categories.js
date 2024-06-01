import React from 'react';

const Categories = ({ showItem, btn }) => {
  return (
    <div className='btn-container'>
      {btn.map((item, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => showItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
