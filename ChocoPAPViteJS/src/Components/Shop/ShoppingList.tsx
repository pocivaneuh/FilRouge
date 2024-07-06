import { prdList } from '../../Datas/prdList';
import { Product } from './Products/Product';
// import { ShoppingFilters } from './ShoppingFilters/ShoppingFilters';

import './ShoppingList.css';


export const ShoppingList = () => {
  return (
    <section id="ContenuPrincipal">
      <section className="shop">
        <div id="selectProducts" className="col-5 col-lg-3">

        </div>
        <div id="Productsliste" className="col-7 col-lg-9">
            {prdList.map(({ idArticle, urlImg, titleArticle, ratingArticle, priceArticle, available }) => (
                <div key={idArticle}>
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
