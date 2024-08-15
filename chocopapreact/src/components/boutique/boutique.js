import { useState } from 'react';
import { prdListe } from '../../datas/prdListe';
import { produit } from './produit';


import './boutique.scss';


function ShoppingList() {
  return (
    /* CONTENU BOUTIQUE */
    <section id="ContenuPrincipal">
      <section className="row m-0">
        <div id="selectProduits" className="col-5 col-lg-3"></div>
        <div id="lstProduits" className="col-7 col-lg-9">
            {prdListe.map(({ idProduit, urlImg, titreArticle, noteArticle, prixArticle }) => (
                    <div key={idProduit}>
                        <produit
                            urlImg={urlImg}
                            titreArticle={titreArticle}
                            noteArticle={noteArticle}
                            prixArticle={prixArticle}
                        />
                    </div>
                ))
            }
        </div>
      </section>
    </section>
  );
}

export default ShoppingList;
