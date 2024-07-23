import { useMemo, useState } from "react";
import { prdList } from '../../Datas/prdList.ts';
import { Product } from './Products/Product.tsx';
import { categoriesList } from "../../Datas/categoriesList.ts";
import { ShoppingFilters, ShoppingFiltersProps } from './ShoppingFilters/ShoppingFilters.tsx';

import './ShoppingList.css';

export const ShoppingList = () => {

  const initialSelectedCategories = categoriesList.map((category) => category.idCategory);

  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialSelectedCategories);
  const handleCategoriesChange: ShoppingFiltersProps['onCategoriesChange'] = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const [availableSelection, setAvailableSelection] = useState<boolean[]>([true, false]);
  const handleCheckboxAvailableChange: ShoppingFiltersProps['onCheckboxAvailableChange'] = (availableSelection) => {
    setAvailableSelection(availableSelection);
  };

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const handlePricesMinChange: ShoppingFiltersProps['onMinChange'] = (newMinPrice) => {
    setMinPrice(newMinPrice);
    console.log(minPrice);
  };
  const handlePricesMaxChange: ShoppingFiltersProps['onMaxChange'] = (newMaxPrice) => {
    setMaxPrice(newMaxPrice);
    console.log(maxPrice);
  };


  const filteredProducts = useMemo(() => {
    return prdList.filter((product) => {
      if ((selectedCategories.length === 0) || (availableSelection.length === 0)) {
        return false;
      }
      if (availableSelection.length === 1) {
        return product.priceArticle >= minPrice && product.priceArticle <= maxPrice && product.available === availableSelection[0] && product.categories.some((category) => selectedCategories.includes(category));
      }
      return product.priceArticle >= minPrice && product.priceArticle <= maxPrice && availableSelection.includes(product.available) && product.categories.some((category) => selectedCategories.includes(category));
    });
  }, [prdList, selectedCategories, availableSelection, minPrice, maxPrice]);


  return (
    <section id="ContenuPrincipal">
      <section className="shop">
        <div className='productsSelection'>
          <ShoppingFilters
            categoriesList={categoriesList}
            onCategoriesChange={handleCategoriesChange}
            onCheckboxAvailableChange={handleCheckboxAvailableChange}
            onMinChange={handlePricesMinChange}
            onMaxChange={handlePricesMaxChange}
          />
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

