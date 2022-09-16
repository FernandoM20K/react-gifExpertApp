import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['Onepunch', 'Smurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Onepunch']);

//   const handleAdd = () => {
//     //setcategories( [...categories, 'Hunter x Hunter'] );
//     setcategories( cats => [...categories, 'Hunter x Hunter'] );
//   }

  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories  } />
        <hr/>

    <ol>
        {
            categories.map(category => ( 
              <GifGrid 
                key= { category }
                category={ category }
              />
            ))
        }
    </ol>
    </div>
  )
}