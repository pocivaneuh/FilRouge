import "./Product.css";

import { Rating } from "../Rating/Rating";
import { FC } from "react";

export type ProductProps = {
  idArticle: number;
  urlImg: string ;
  titleArticle : string ;
  ratingArticle : number ;
  priceArticle : number ;
  available : boolean ;
  categoryId?: string;
}
  
function Exist({available}:{available : boolean}) {
  if (available) {
    return (
      <span>&nbsp;</span>
    );
  }
  return (
    <span className="card-text-exist">* Indisponible</span>
  );
}
export const Product: FC<ProductProps> = ({urlImg,
  titleArticle,
  ratingArticle,
  priceArticle,
  available,
  categoryId,
}) => {
    {
      return (

        <div className="card">
          <img className="cardImg" src={urlImg} alt={`photo du ${titleArticle}`} title={`photo du ${titleArticle}`} />
          <h1 className="cardTitle">{titleArticle}</h1>
          {typeof categoryId !== 'undefined' && (
            <p>{categoryId}</p>
          )}
          <Exist available={available}></Exist>
          <p className="card-text-tarif">{priceArticle} €</p>
          <div className="card-text-rating"><Rating score={ratingArticle}></Rating></div>

          <form
            className="ajouter"
            action=""
            title="Ajouter l'article au panier"
          >
            <div className="group">
              <label htmlFor="nbArticles" className="d-block">
                {/* Nombre d'articles */}
              </label>
              <input
                type="number"
                name="nbArticles"
                id="nbArticles"
                title="Nombre d'articles à ajouter"
                min="0"
                max="100"
                placeholder="0"
                required
              />
              <button type="submit" className="btnAjouter">
                Ajouter au panier
              </button>
            </div>
          </form>
        </div>
      );
    };
};
