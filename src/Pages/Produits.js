import { useEffect, useState } from "react"
import PRODUITS from '../data/db.json';
import { Link } from "react-router-dom";

export default function Produits() {
  const [produits] = useState(PRODUITS);
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState(PRODUITS);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Récupère les données du panier depuis le localStorage
    const storedCart = localStorage.getItem("paniers");
    // Si des données sont présentes dans le localStorage
    if (storedCart) {
      // Met à jour l'état du panier avec les données récupérées
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("paniers", JSON.stringify(cart));
  }, [cart]);

  const ajouterPanier = (product) => {
    product.quantity = 1;
    setCart((prevCart) => [...prevCart, product]);
  };

  // Supprime un produit du panier
  const supprimerProduitPanier = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    //setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vérifie si un produit est déjà présent dans le panier
  const unProduitEstDansLePanier = (productId) => {
    return cart.some((product) => product.id === productId); //some() == find()
  };

  const handleSearch = () => {
    const products = produits;
    const filteredResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const handleKeyUp = (e) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  return (
    <>
      <div className="blog">
        <div className="my-5">
            <input 
              style={{borderBlockStart: "initial", borderRadius: 0}}
              value={searchQuery}
              onKeyUp={handleKeyUp}
              onChange={(e) => setSearchQuery(e.target.value)} className="form-control input" type="text" placeholder="Recherche un produit..." />
        </div>

        <div className="d-flex flex-wrap">

          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div key={item.id} className="card col-12 col-md-6 shadow-sm my-4 col-lg-2" style={{border: 0, borderRadius: 10, marginLeft: 30}}>
                <Link to={`/detail/${item.id}`} data-bs-toggle="tooltip" data-bs-placement="right" title="Cliquez ici pour voir ce détail.">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img src={`/img/${item.image}`} className="card-img-top" title="Cliquez pour voir le détail" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-danger">{item.conf}</p>
                  <p className="card-text">{item.prix} Ar</p>
                </div>
                <div className="card-footer text-center" style={{backgroundColor: "white"}}>
                  {unProduitEstDansLePanier(item.id) ? (
                    <button
                      type="button"
                      onClick={() => supprimerProduitPanier(item)}
                      className="btn btn-sm btn-danger mt-auto"
                    >
                      <i className="bi-trash me-1"></i> Retirer
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => ajouterPanier(item)}
                      className="btn btn-sm text-white fw-bolder mt-auto"
                      style={{backgroundColor: '#00CCC4'}}
                    >
                      <i className="bi-cart-fill me-1"></i> Ajouter
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="card card-body mt-5">
              <p className="text-center">Aucun résultat trouvé.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}


