// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ProductsData } from '../Products';

import ItemList from './ItemList';

const HomePage = () => {
  

  return (
    <>
      <h1 className="text-center">Bidur&apos;s Online Shop</h1>
      <div className="container my-3">
      <div className="row my-5">
        {ProductsData.map((element, index) => {
          return (
            <div className="col-md-4" key={index}>
             <ItemList
            title={element.name}
            desc={element.descriptions}
            image={element.image}
            category={element.category}
            Price={element.Price}
             />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default HomePage;
