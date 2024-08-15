import { prdList } from '../../../Datas/prdList.ts';
import "./CartFilled.css";


export const CartFilled = () =>
    {
      return (

        <div className="container">
          <div className="row">
            <section className="reductions">
                    <div className="cardReductions">
                            <div className="card-body">
                                <form>
                                    <div className="form-group"> <label>Un coupon ?</label>
                                        <div className="input-group"> 
                                            <input 
                                                type="text"
                                                className="form-control coupon"
                                                name=""
                                                placeholder="N° Coupon"
                                            />
                                            <span className="input-group-append">
                                                <button
                                                    type="submit"
                                                    className="ajouter"
                                                    title="titre">Ajouter
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                </section>
                <section className="productlist">
                    <div className="productlistCard">
                        <div className="table-responsive">
                            <table className="table table-borderless table-shopping-cart">
                                <thead className="text-muted" >
                                        <tr className="tblTitle">
                                            <th className = "colProduct" scope="col">Produit</th>
                                            <th className = "colQuantity" scope="col">Quantité</th>
                                            <th className = "colPrice" scope="col">Prix</th>
                                            <th className = "colRetired" scope="col"></th>
                                        </tr>
                                </thead>
                                {prdList.map((item) => (
                                    <>
                                    <tbody key={item.idArticle}>
                                        <tr>
                                            <td>
                                                <figure className="itemside align-items-center">
                                                    <div className="aside">
                                                        <img 
                                                            title={item.textAltImg}
                                                            src={item.urlImg}
                                                            className="img-sm"
                                                        />
                                                    </div>
                                                    <figcaption className="info"> 
                                                        <a 
                                                            href="#"
                                                            className="itemtitle text-dark"
                                                            data-abc="true">
                                                            {item.titleArticle}
                                                        </a>
                                                        <p 
                                                            className="text-muted small">
                                                                Format: <br />
                                                                Sachet
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td> <select title="titre" className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select> </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <var className="price">
                                                        {item.priceArticle} €
                                                    </var> 
                                                    <small className="text-muted"> 
                                                        {item.priceArticle} 
                                                        € chacun 
                                                    </small>
                                                </div>
                                            </td>
                                            <td className="text-right d-none d-md-block">
                                                <a 
                                                    data-original-title="Mettre de côté"
                                                    title="Retirer" 
                                                    href=""
                                                    className="btn btn-light"
                                                    data-toggle="tooltip"
                                                    data-abc="true"
                                                >
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                                <a 
                                                    href="" 
                                                    className="btn btn-light"
                                                    data-abc="true"
                                                >
                                                    Retirer
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </>
                                ))
                            }
                            </table>
                        </div>
                    </div>
                </section>
                <section className="paiement" >
                    <div className="paiementCard">
                        <div className="card-body">
                            <dl className="dlist-align">
                                <dt>Prix total : </dt>
                                <dd className="text-right">&nbsp;0.00 €</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Réduction : </dt>
                                <dd className="text-right text-danger">&nbsp;0.00 €</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Total : </dt>
                                <dd className="text-right text-dark"><strong>&nbsp;0.00 €</strong></dd>
                            </dl>
                            <hr /> 
                            <a 
                                href="#"
                                className="btn btn-out ajouter btn-square btn-main"
                                data-abc="true"
                            > 
                                Payer
                            </a>
                            <a 
                                href="#" 
                                className="btn btn-out retour btn-square btn-main"
                                data-abc="true"
                            >
                                Poursuivre mes achats
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};