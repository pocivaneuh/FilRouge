import "./produit.scss";

function handleClick(titreArticle) {
  alert(`Vous voulez acheter 1 ${titreArticle}? Très bon choix 🌱✨`);
}

function Produit({
  idProduit,
  urlImg,
  titreArticle,
  noteArticle,
  prixArticle,
}) {
  return (
    <div
      id="lstProduitsLG"
      className="container-fluid"
      onClick={() => handleClick}
    >
      <div className="row m-3">
        <div className="card m-3">
          <a routerLink={`/produit/'${idProduit}`}>
            <img
              className="card-img-top mt-3"
              src={urlImg}
              alt={`photo du ${titreArticle}`}
              title={`photo du ${titreArticle}`}
            />
          </a>
          <div className="card-body">
            <span>* Indisponible </span>
            <h1 className="card-title">{titreArticle}</h1>
            <p className="card-text tarif">{prixArticle} €</p>
            <p className="card-text">{noteArticle}</p>
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
}

export default Produit;
