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
export const Product: FC<ProductProps> = ({idArticle,
  urlImg,
  titleArticle,
  ratingArticle,
  priceArticle,
  available,  
}) => {
    {
      return (

        <div className="card">
          <img className="cardImg" src={urlImg} alt={`photo du ${titleArticle}`} title={`photo du ${titleArticle}`} />
          <h1 className="cardTitle">{titleArticle}</h1>
          <Exist available={available}></Exist>
          <p className="card-text-tarif">{priceArticle} €</p>
          <div className="card-text-rating"><Rating score={ratingArticle}></Rating></div>

          <form
            className="ajouter"
            action=""
            title="Ajouter l'article au panier"
          >
            <div className="group">
              <label for="nbArticles" className="d-block">
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
        // <div
        //   id="lstProduitsLG"
        //   className="container-fluid"
        //   onClick={() => handleClick}
        // >
        //   <div className="row m-3">
        //     <div className="card m-3">
        //       <a href={`/produit/'${idArticle}`}>
        //         <img
        //           className="cardImg"
        //           src={urlImg}
        //           alt={`photo du ${titleArticle}`}
        //           title={`photo du ${titleArticle}`}
        //         />
        //       </a>
        //       <div className="card-body">
        //         <span>* Indisponible </span>
        //         <h1 className="card-title">{titleArticle}</h1>
        //         <p className="card-text tarif">{priceArticle} €</p>
        //         <p className="card-text"><Rating score={ratingArticle}></Rating></p>
        //         <p className="card-text">{ratingArticle}</p>
        //         <form
        //           className="mt-4"
        //           action=""
        //           title="Ajouter l'article au panier"
        //         >
        //           <div className="group">
        //             <label for="nbArticles" className="d-block">
        //               {/* Nombre d'articles */}
        //             </label>
        //             <input
        //               type="number"
        //               name="nbArticles"
        //               id="nbArticles"
        //               title="Nombre d'articles à ajouter"
        //               min="0"
        //               max="100"
        //               placeholder="0"
        //               required
        //             />
        //             <button type="submit" className="ajouter">
        //               Ajouter au panier
        //             </button>
        //           </div>
        //         </form>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      );
    };
};
