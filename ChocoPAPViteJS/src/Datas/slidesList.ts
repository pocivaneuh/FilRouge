import accueil1 from "../Assets/Images/accueil1.jpg";
import accueil2 from "../Assets/Images/accueil2.jpg";
import accueil3 from "../Assets/Images/accueil3.jpg";

interface Slide {
  idSlide : number,
  urlImgSlide: string,
  textAltImgSlide : string,
  slideClass :string,
}

export const slidesList: Slide[] = [
  { 
      idSlide : 1,
      urlImgSlide: accueil1,
      textAltImgSlide : "Banquet de pâtisseries",
      slideClass :"",
     },
    { 
      idSlide : 2,
      urlImgSlide: accueil2,
      textAltImgSlide : "Méli-mélo de bonbons",
      slideClass :"",
     },
    { 
      idSlide : 3,
      urlImgSlide: accueil3,
      textAltImgSlide : "Chocolats bien ordonnés",
      slideClass :"",
    }
  ];