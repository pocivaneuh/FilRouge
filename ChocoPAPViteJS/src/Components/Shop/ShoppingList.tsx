import { useState } from "react";
import { prdList } from '../../Datas/prdList.ts';
import { Product } from './Products/Product.tsx';
import { ShoppingFilters } from './ShoppingFilters/ShoppingFilters.tsx';

import './ShoppingList.css';

export const ShoppingList = () => {
  
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };
  
  const filteredProducts = prdList.filter((product) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.includes(product.category);
  });
  
  return (
    <section id="ContenuPrincipal">
      <section className="shop">
        <div className='productsSelection'>
          <ShoppingFilters onCategoryChange={handleCategoryChange} />
        </div>
        <div className='productsList'>
            {filteredProducts.map((item) => (
                <div className='productCard' key={item.idArticle}>
                    <Product
                      idArticle={item.idArticle}
                      urlImg={item.urlImg}
                      titleArticle={item.titleArticle}
                      ratingArticle={item.ratingArticle}
                      priceArticle={item.priceArticle}
                      available={item.available}
                    />
                </div>
              ))
            }
        </div>
      </section>
    </section>
  );
};

