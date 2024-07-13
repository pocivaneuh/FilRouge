import { useMemo, useState } from "react";
import { prdList } from '../../Datas/prdList.ts';
import { Product } from './Products/Product.tsx';
import { categoriesList } from "../../Datas/categoriesList.ts";
import { ShoppingFilters, ShoppingFiltersProps } from './ShoppingFilters/ShoppingFilters.tsx';

import './ShoppingList.css';

export const ShoppingList = () => {

  const initialSelectedCategories = categoriesList.map((category) => category.idCategory);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialSelectedCategories)
  const handleCategoriesChange: ShoppingFiltersProps['onCategoriesChange'] = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const filteredProducts = useMemo(() => {
    return prdList.filter((product) => {
      if (selectedCategories.length === 0) {
        return false;
      }
      return product.categories.some((category) => selectedCategories.includes(category))
    });
  }, [prdList, selectedCategories]);


  // setCategories(updatedCategories);
  //       const selectedCategories = updatedCategories.filter((category) => category.isChecked).map((category) => category.idCategory);
  //       onCategoriesChange(selectedCategories);

  return (
    <section id="ContenuPrincipal">
      <section className="shop">
        <div className='productsSelection'>
          <ShoppingFilters onCategoriesChange={handleCategoriesChange} />
        </div>
        <div className='productsList'>
            {filteredProducts.length === 0 && (
              <p>Aucun produit ne correspond aux critères de filtrage sélectionnés.</p>
            )}
            {filteredProducts.map((item) => (
                <div className='productCard' key={item.idArticle}>
                    <Product
                      idArticle={item.idArticle}
                      urlImg={item.urlImg}
                      titleArticle={item.titleArticle}
                      ratingArticle={item.ratingArticle}
                      priceArticle={item.priceArticle}
                      available={item.available}
                      categories={item.categories}
                    />
                </div>
              ))
            }
        </div>
      </section>
    </section>
  );
};

