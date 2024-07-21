import { DOMAttributes, FC, useState } from 'react';
import './ShoppingFilters.css';

import { categoriesList } from '../../../Datas/categoriesList.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftRotate as ResetIco} from '@fortawesome/free-solid-svg-icons';
// import { prdList } from 'Datas/prdList.ts';

// function handleSubmit(e:any) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }
export const Reset = ( ) => 
  {
    return (
      <FontAwesomeIcon id="resetIco" icon={ResetIco}/>
    );
  };

export type ShoppingFiltersProps = {
    onCategoriesChange: (selectedCategories: Array<string>) => void;
    onCheckboxAvailableChange: (availableSelection: Array<boolean>) => void;
    onMinChange: (minPrice:number) => void;
    onMaxChange: (maxPrice:number) => void;
    onScoreMinChange: (minNote:number) => void ;
    onScoreMaxChange: (maxNote:number) => void ;
}

export const ShoppingFilters: FC<ShoppingFiltersProps> = ({
    onCategoriesChange, 
    onCheckboxAvailableChange,
    onMinChange,
    onMaxChange,
    onScoreMinChange,
    onScoreMaxChange,
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
    const [availableSelection, setAvailableSelection] = useState<boolean[]>([true, false]);
    const [selectedAvailable, setSelectedAvailable] = useState(true);
    const [selectedNotAvailable, setSelectedNotAvailable] = useState(true);

    const onCheckboxAvailableTrueChange: DOMAttributes<HTMLInputElement>['onChange'] = () => {
        let newAvailableSelection;
        const hasTrue = availableSelection.includes(true)
        if (hasTrue) {
            newAvailableSelection = availableSelection.filter(value => value !== true)
        } else {
            newAvailableSelection = availableSelection.concat(true);
        }
        setSelectedAvailable(newAvailableSelection.includes(true));
        setAvailableSelection(newAvailableSelection);
        onCheckboxAvailableChange(newAvailableSelection);
      };
   
      const onCheckboxAvailableFalseChange: DOMAttributes<HTMLInputElement>['onChange'] = () => {
        let newAvailableSelection;
        const hasFalse = availableSelection.includes(false)
        if (hasFalse) {
            newAvailableSelection = availableSelection.filter(value => value !== false)
        } else {
            newAvailableSelection = availableSelection.concat(false);
        }
        setSelectedNotAvailable(newAvailableSelection.includes(false));
        setAvailableSelection(newAvailableSelection);
        onCheckboxAvailableChange(newAvailableSelection);

      };

    // Prix
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const onPriceMinChange: DOMAttributes<HTMLInputElement>['onChange'] = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinPrice = event.currentTarget.valueAsNumber;
        setMinPrice(newMinPrice);
        onMinChange(newMinPrice);
    };
    
    const onPriceMaxChange: DOMAttributes<HTMLInputElement>['onChange'] = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMaxPrice = event.currentTarget.valueAsNumber;
        setMaxPrice(newMaxPrice);
        onMaxChange(newMaxPrice);
    };

    const onPricesReset = () => {
        setMinPrice(0);
        onMinChange(0);
        setMaxPrice(100);
        onMaxChange(100);
    };

    // Notes
    const [noteMin, setNoteMin] = useState(0);
    const [noteMax, setNoteMax] = useState(5);

    const onNotesReset = () => {
        setNoteMin(0);
        setNoteMax(5);
    };

    const onNoteMinChange: DOMAttributes<HTMLSelectElement>['onChange'] = (event) => {
        const newMinNote = parseInt(event.currentTarget.value);
        setNoteMin(newMinNote);
        onScoreMinChange(newMinNote);
    };

    const onNoteMaxChange: DOMAttributes<HTMLSelectElement>['onChange'] = (event) => {
        const newMaxNote = parseInt(event.currentTarget.value);
        setNoteMax(newMaxNote);
        onScoreMaxChange(newMaxNote);
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
                            onChange={onCheckboxAvailableTrueChange}
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
                            onChange={onCheckboxAvailableFalseChange}
                        />
                        <span>Indisponible</span>
                    </label>
                </div>
            </div>
            <div className="form-check price">
                <label className="form-check-label text-style1" htmlFor="price">
                    Prix : 
                    <button type="reset" title="Réinitialiser les prix" className="btnReset" onClick={onPricesReset}><Reset /></button>
                </label>
                <div className="pricesSelector">
                    <label htmlFor="PriceMin" className="form-label">Prix Min&nbsp;</label>
                    <input className="PiceInput" type="number" name="PriceMin" id="PriceMin" min="0" max="100" title="Prix Minimum" placeholder="0 €" value={minPrice} onChange={onPriceMinChange}/>
                </div>
                <div className="pricesSelector">
                    <label htmlFor="PriceMax" className="form-label">Prix Max&nbsp;</label>
                    <input className="PiceInput"  type="number" name="PriceMax" min="0" max="100" id="PriceMax" title="Prix Maximum" placeholder="100 €" value={maxPrice} onChange={onPriceMaxChange}/>
                </div>
            </div>
            <div className="form-check notes">
                <div className="notesSelector">
                    <label className="form-check-label text-style1" htmlFor="notes">
                        Notes : <button type="reset" title="Réinitialiser les notes" className="btnReset" onClick={onNotesReset}><Reset /></button>
                    </label>
                    <div className="input-group noteMin">
                        <label htmlFor="noteMin" className="form-label">Note Min&nbsp;</label>
                        <select className="box" name="noteMin" id="noteMin" defaultValue={noteMin} onChange={onNoteMinChange}>
                            <option value='0'>0</option>
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
                    <select className="box" name="noteMax" id="noteMax" defaultValue={noteMax} onChange={onNoteMaxChange}>
                        <option value='0'>0</option>
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


  
  