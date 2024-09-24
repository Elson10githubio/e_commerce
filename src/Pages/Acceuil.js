import { Link } from "react-router-dom";
const Acceuil = () => {
    return (
        <div className="row my-5">
          <div className="col-6">
            <h1 className="display-3">Bienvenue sur Boutik'naka</h1>
            <p className="mt-3 d-flex align-items-center">
                Nous proposons une large gamme de smartphones dernier cri, adaptés à tous les budgets et besoins, des modèles d'entrée de gamme aux appareils haut de gamme. Nos ordinateurs portables allient performance et fiabilité, parfaits pour le travail, les études ou le divertissement. Chez BOUTIK'NAKA, nous mettons l'accent sur la satisfaction client avec un service après-vente réactif et des garanties sur tous nos produits. Découvrez également nos accessoires indispensables pour optimiser l'utilisation de vos appareils. Simple, pratique et sécurisé, BOUTIK'NAKA vous offre une expérience d'achat en ligne agréable et fiable
            </p>
            <div className="d-flex justify-content-start">
                <Link to="/acceuil" className="btn w-25 fw-bolder text-white" style={{backgroundColor: '#00CCC4'}}>Visiter</Link>
            </div>
          </div>
          <div className="col-6">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                        <img src={'/img/Itel.jpg'} className="img-fluid d-block w-100 card-img img-responsive" alt="..." style={{maxWidth:'1000px'}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={'/img/hp.png'} className="img-fluid d-block w-100 card-img img-responsive" alt="..." style={{maxWidth:'1000px'}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={'/img/Itel.jpg'} className="img-fluid d-block w-100 card-img img-responsive" alt="..." style={{maxWidth:'1000px'}}/>
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Acceuil;
