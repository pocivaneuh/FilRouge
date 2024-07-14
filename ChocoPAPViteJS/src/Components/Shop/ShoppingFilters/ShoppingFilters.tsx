import { DOMAttributes, FC, useState } from 'react';
import './ShoppingFilters.css';

import { categoriesList } from '../../../Datas/categoriesList.ts';

// function handleSubmit(e:any) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }


export type ShoppingFiltersProps = {
    onCategoriesChange: (selectedCategories: Array<string>) => void;
    onCheckboxAvailableChange: (selectedAvailable: boolean) => void;
    // onCheckboxNotAvailableChange: (selectedNotAvailable: boolean) => void;
}

export const ShoppingFilters: FC<ShoppingFiltersProps> = ({
    onCategoriesChange, 
    // onCheckboxAvailableChange,
    // onCheckboxNotAvailableChange,
}) => {

    // Catégories
    const [categories, setCategories] = useState(categoriesList);

    const onCheckboxCategoryChange: DOMAttributes<HTMLInputElement>['onChange'] = (event) => {
        const updatedCategories = categories.map((category) => {
        if (category.idCategory === event.currentTarget.name) {
            return { ...category, isChecked: event.currentTarget.checked };
        }
        return category;
        });
        setCategories(updatedCategories);
        const selectedCategories = updatedCategories.filter((category) => category.isChecked).map((category) => category.idCategory);
        onCategoriesChange(selectedCategories);
    };

    // Toutes les Catégories
    const onAllCategoriesSelected = () => {
        const updatedCategories = categories.map((category) => {
              return { ...category, isChecked: true }
        });
        setCategories(updatedCategories);
        const selectedCategories = updatedCategories.filter((category) => category.isChecked).map((category) => category.idCategory);
        onCategoriesChange(selectedCategories);
    }

    // Aucune les Catégories
    const onNoCategorySelected = () => {
        const updatedCategories = categories.map((category) => {
              return { ...category, isChecked: false }
        });
        setCategories(updatedCategories);
        const selectedCategories = updatedCategories.filter((category) => category.isChecked).map((category) => category.idCategory);
        onCategoriesChange(selectedCategories);
    }
    

    // Disponible / Indisponible
    const [selectedAvailable, setSelectedAvailable] = useState(true);
    const onCheckboxAvailableChange = () => {
        setSelectedAvailable(!selectedAvailable)
    };

    const [selectedNotAvailable, setSelectedNotAvailable] = useState(true);
    const onCheckboxNotAvailableChange = () => {
        setSelectedNotAvailable(!selectedNotAvailable)
    };

  return (
        <form className="selectionform">
            <div className="form-check" id="category">
                <label className="form-check-label text-style1">
                    Catégories : 
                </label>
                {categories.map((category) => (
                    <div className="category" key={category.idCategory}>
                        <label htmlFor={category.idCategory}>
                            <input
                                type="checkbox"
                                id={category.idCategory}
                                title={category.categoryTitle}
                                name={category.idCategory}
                                defaultValue="true"
                                checked={category.isChecked}
                                onChange={onCheckboxCategoryChange}
                            />
                            <span>{category.categoryTitle}</span>
                        </label>
                    </div>
                ))}
            </div>
            <div className='BtnCat'>
                <button type="button" title="Sélectionner" className="btnAllCat" onClick={onAllCategoriesSelected}>Toutes</button>
                <button type="button" title="Déselectionner" className="btnNoneCat" onClick={onNoCategorySelected}>Aucune</button>
            </div>
            <div className="form-check" id="available">
                <label className="form-check-label text-style1">
                    Disponible : 
                </label>
                <div className="category">
                    <label htmlFor="isAvailable">
                        <input
                            type="checkbox"
                            id="isAvailable"
                            title="Est disponible"
                            name="isAvailable"
                            defaultValue="true"
                            checked={selectedAvailable}
                            onChange={onCheckboxAvailableChange}
                        />
                        <span>Disponible</span>
                    </label>
                </div>
                <div className="category">
                    <label htmlFor="isNotAvailable">
                        <input
                            type="checkbox"
                            id="isNotAvailable"
                            title="Est disponible"
                            name="isNotAvailable"
                            defaultValue="true"
                            checked={selectedNotAvailable}
                            onChange={onCheckboxNotAvailableChange}
                        />
                        <span>Indisponible</span>
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


  
  