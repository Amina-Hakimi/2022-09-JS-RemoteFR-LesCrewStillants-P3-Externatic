import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import sadPage from "../../assets/lottie/sadPage.json";

import "@components/Error/Error.scss";

export default function Error() {
  return (
    <>
      <div className="notFoundContainer">
        <Player autoplay loop src={sadPage} className="notFoundLottie" />
        <h2>
          Il semblerait ne rien y avoir içi, aucune entreprise, aucune offre
          rien... Seulement une page vide assise içi en attendant de trouver la
          bonne recherche.
        </h2>
        <h2>
          Est-ce vous ? Vous pouvez retourner à l'accueil du site si vous le
          souhaitez!
        </h2>

        <Link to="/">
          <button type="button" className="notFoundButton">
            Go Back
          </button>
        </Link>
      </div>
      {/*
        __                 
        '. \  🅷🅴🅻🅻🅾, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅴🅻🅼🅴🆁 ❗
        '- \               
          / /_         .---.
        / | \\,.\/--.//    )
        |  \//        )/  / 
          \  ' ^ ^    /    )____.----..  6
          '.____.    .___/            \._) 
              .\/.                      )
              '\                       /
              _/ \/    ).        )    (
              /#  .!    |        /\    /
              \  C// #  /'-----''/ #  / 
          .   'C/ |    |    |   |    |mrf  ,
          \), .. .'OOO-'. ..'OOO'OOO-'. ..\(,
      */}
    </>
  );
}
