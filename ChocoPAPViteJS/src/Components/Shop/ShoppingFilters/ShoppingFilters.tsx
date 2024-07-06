// import React from "react";

import './ShoppingFilters.css';

// function handleSubmit(e:any) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

export const ShoppingFilters = () => {
  return (
        <form className="selectionform">
            <div className="form-check" id="category">
                <label className="form-check-label text-style1">
                    Catégories : 
                </label>
                <div className="category">
                    <label htmlFor="category">
                        <input type="checkbox" id="blanc" title="blanc" name="lait" defaultValue='true' autoFocus />
                        <span>Chocolat</span>&nbsp;Blanc
                    </label>
                </div>
                <div className="category">
                    <label htmlFor="category">
                        <input type="checkbox" id="lait" title="lait"  name="blanc" defaultValue = "true"/>
                        <span>Chocolat au</span>&nbsp;Lait
                    </label>
                </div>
                <div className="category">
                    <label htmlFor="category">
                        <input type="checkbox" id="noir" title="noir"  name="noir" defaultValue = "true"/>
                        <span>Chocolat</span>&nbsp;Noir
                    </label>
                </div>
                <div className="category">
                    <label htmlFor="category">
                        <input type="checkbox" id="noix" title="noix"  name="noixNoisette" defaultValue = "true"/>
                        <span></span>&nbsp;Noix / Noisettes
                    </label>
                </div>
                <div className="category">
                    <label htmlFor="category">
                        <input type="checkbox" id="caramel" title="caramel" name="caramel" defaultValue = "true"/>
                        <span></span>&nbsp;Caramel
                    </label>
                </div>
                <div className="category">
                    <label htmlFor="category">
                        <input type="checkbox" id="liqueur" title="liqueur" name="liqueur" defaultValue = "true"/>
                        <span></span>&nbsp;Liqueur
                    </label>
                </div>
            </div>
            <div className="form-check price">
                <label className="form-check-label text-style1" htmlFor="price">
                    Prix : 
                </label>
                <div className="pricesSelector">
                    <label htmlFor="PriceMin" className="form-label">Prix Min&nbsp;</label>
                    <input className="PiceInput" type="number" name="PriceMin" id="PriceMin" min="0" max="100" title="Prix Minimum" placeholder="0 €" />
                </div>
                <div className="pricesSelector">
                    <label htmlFor="PriceMax" className="form-label">Prix Max&nbsp;</label>
                    <input className="PiceInput"  type="number" name="PriceMax" min="0" max="100" id="PriceMax" title="Prix Maximum" placeholder="100 €" />
                </div>
            </div>
            <div className="form-check notes">
                <div className="notesSelector">
                    <label className="form-check-label text-style1" htmlFor="notes">
                        Notes : 
                    </label>
                    <div className="input-group noteMin">
                        <label htmlFor="noteMin" className="form-label">Note Min&nbsp;</label>
                        <select className="box" name="noteMin" id="noteMin" defaultValue='1'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                </div>
                <div className="input-group noteMax">
                    <label htmlFor="noteMax" className="form-label">Note Max&nbsp;</label>
                    <select className="box" name="noteMax" id="noteMax" defaultValue='5'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
            </div>
        </form>
  );
};


  
  