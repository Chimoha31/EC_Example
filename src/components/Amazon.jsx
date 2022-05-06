import React from 'react';
import lists from '../Data';
import Cards from './Cards';

const Amazon = () => {
  return (
    <section>
      {lists.map((list) => (
        <Cards key={list.id} list={list} />
      ))}
    </section>
  )
}

export default Amazon
