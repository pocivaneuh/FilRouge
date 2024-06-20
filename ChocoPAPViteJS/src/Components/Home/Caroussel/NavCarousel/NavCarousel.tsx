import "./NavCarousel.css";

export const NavCarousel = ( ) =>
{
  return (
    <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row mx-0 justify-content-center">
                    <div id="carousel-selector-0" className="thumb col-4 col-sm-2 px-1 py-2" [ngClass]="{'selected': idSlideCarousel===1}" data-target="#crslChocoAccueil" (click)="onSelect(1)">
                        <img src="./assets/images/accueil1.jpg" className="img-fluid" alt="img">
                    </div>
                    <div id="carousel-selector-1" className="thumb col-4 col-sm-2 px-1 py-2" [ngClass]="{'selected': idSlideCarousel===2}" data-target="#crslChocoAccueil" (click)="onSelect(2)">
                        <img src="./assets/images/accueil2.jpg" className="img-fluid" alt="img">
                    </div>
                    <div id="carousel-selector-2" className="thumb col-4 col-sm-2 px-1 py-2" [ngClass]="{'selected': idSlideCarousel===3}" data-target="#crslChocoAccueil" (click)="onSelect(3)">
                        <img src="./assets/images/accueil3.jpg" className="img-fluid" alt="img">
                    </div>
                </div>
            </div>
        </div>                    
        <div id="Navigation">
            <a className="carousel-control-prev" role="button" title="Précédent" (click)="onPrev()">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" role="button" title="Suivant" (click)="onNext()">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div> 
    </div>
  );
};
