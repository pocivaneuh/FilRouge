import { prdList } from '../../Datas/prdList';
import { Product } from './Products/Product';
import { ShoppingFilters } from './ShoppingFilters/ShoppingFilters.tsx';

import './ShoppingList.css';


export const ShoppingList = () => {
  return (
    <section id="ContenuPrincipal">
      <section className="shop">
        <div className='productsSelection'>
          <ShoppingFilters />
        </div>
        <div className='productsList'>
            {prdList.map(({ idArticle, urlImg, titleArticle, ratingArticle, priceArticle, available }) => (
                <div className='productCard' key={idArticle}>
                    <Product
                      idArticle={idArticle}
                      urlImg={urlImg}
                      titleArticle={titleArticle}
                      ratingArticle={ratingArticle}
                      priceArticle={priceArticle}
                      available={available}
                    />
                </div>
              ))
            }
        </div>
      </section>
    </section>
  );
};
