import React from 'react';

const Menu = ({ item, setDataa }) => {
  const handleRemove = (id) => {
    const remove = item.filter((item) => {
      return item.id !== id;
    });
    setDataa(remove);
  };
  return (
    <div className='section-center'>
      {item.map((single) => {
        const { desc, id, img, price, title } = single;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
            <button onClick={() => handleRemove(id)} className='filter-btn mar'>
              not Interested
            </button>
          </article>
        );
      })}
      {item.length !== 0 ? undefined : (
        <button
          className='filter-btn'
          onClick={() => window.location.reload(true)}
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default Menu;
