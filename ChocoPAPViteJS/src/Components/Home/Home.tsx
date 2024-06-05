import "../../../App.scss";
import "./Home.scss";

export const Home = ( ) =>
{
  return (
    <main id="ContenuPrincipal">
        <section class="row m-0">
                <app-caroussel></app-caroussel>
                <div id="boutique" class="mt-5 mb-3 text-style1" >
                    <a routerLink="/boutique">VOIR LA BOUTIQUE</a>
                </div>
        </section>
    </main>
  );
};
