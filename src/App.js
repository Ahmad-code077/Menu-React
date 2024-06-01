import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCatogeries = items.map((item) => item.category);
const Unique = ['all', ...new Set(allCatogeries)];

function App() {
  const [dataa, setDataa] = useState(items);
  const [btn, setBtn] = useState(Unique);

  const showItem = (category) => {
    if (category === 'all') {
      setDataa(items);
      return;
    }

    const newButton = items.filter((item) => {
      return item.category === category;
    });
    setDataa(newButton);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>menus</h2>
          <div className='underline'></div>
        </div>
        <Categories showItem={showItem} btn={btn} />
        <Menu item={dataa} setDataa={setDataa} />
      </section>
    </main>
  );
}

export default App;
