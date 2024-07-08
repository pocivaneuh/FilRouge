import { useMemo, useState } from "react";
import { prdList } from '../../Datas/prdList.ts';
import { Product } from './Products/Product.tsx';
import { ShoppingFilters, ShoppingFiltersProps } from './ShoppingFilters/ShoppingFilters.tsx';

import './ShoppingList.css';

export const ShoppingList = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoriesChange: ShoppingFiltersProps['onCategoriesChange'] = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };
  
  const filteredProducts = useMemo(() => {
    return prdList.filter((product) => {
      if (selectedCategories.length === 0) {
        return true;
      }
      return selectedCategories.includes(product.category);
    });
  }, [prdList, selectedCategories]);

  return (
    <section id="ContenuPrincipal">
      <section className="shop">
        <div className='productsSelection'>
          <ShoppingFilters onCategoriesChange={handleCategoriesChange} />
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
                      categoryId={item.category}
                    />
                </div>
              ))
            }
        </div>
      </section>
    </section>
  );
};

