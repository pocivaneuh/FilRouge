import "./Product.scss";

import { prdList } from '../../Datas/PrdList';
import { Rating } from "../Rating/Rating";

function handleClick(titleArticle) {
  alert(`Vous voulez acheter 1 ${titleArticle}? Très bon choix 🌱✨`);
}

export const Product = (  idArticle,
  urlImg,
  titleArticle,
  ratingArticle,
  priceArticle,
) =>
{
  return (
    <div
      id="lstProduitsLG"
      className="container-fluid"
      onClick={() => handleClick}
    >
      <div className="row m-3">
        <div className="card m-3">
          <a routerLink={`/produit/'${idArticle}`}>
            <img
              className="card-img-top mt-3"
              src={urlImg}
              alt={`photo du ${titleArticle}`}
              title={`photo du ${titleArticle}`}
            />
          </a>
          <div className="card-body">
            <span>* Indisponible </span>
            <h1 className="card-title">{titleArticle}</h1>
            <p className="card-text tarif">{priceArticle} €</p>
            <p className="card-text"><Rating Score={ratingArticle}></Rating></p>
            <form
              className="mt-4"
              action=""
              title="Ajouter l'article au panier"
            >
              <div className="group">
                <label for="nbArticles" className="d-block">
                  Nombre d'articles
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
                <button type="submit" className="ajouter">
                  Ajouter au panier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
