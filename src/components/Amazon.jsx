import React from 'react';
import lists from '../Data';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
  return (
    <section>
      {lists.map((list) => (
        <Cards key={list.id} list={list} handleClick={handleClick} />
      ))}
    </section>
  )
}

export default Amazon
