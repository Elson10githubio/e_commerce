
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PRODUITS from '../data/db.json';

const Detail = (props) => {
    const [item] = useState(PRODUITS);
    const [product,setProduct] = useState({});
    const { id } = useParams();
    console.log('props ==', props);
    useEffect(() => {
        setProduct(item.find((product) => product.id === parseInt(id)));
    }, [item, id]);
    
    const [cart, setCart] = useState([]);

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
    console.log('product ==', product);
    product.quantity = 1;
    setCart((prevCart) => [...prevCart, product]);
  };

  // Supprime un produit du panier
  const supprimerProduitPanier = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  // Vérifie si un produit est déjà présent dans le panier
  const unProduitEstDansLePanier = (productId) => {
    return cart.some((product) => product.id === productId);
  };
    return ( 
        <div className="card mt-5 shadow-sm" style={{border: 0}}>
            <div className="row g-0">
                <div className="col-md-4">
              
                    <img src={`/img/${product.image}`} className="img-fluid card-img img-responsive" alt="..." style={{maxWidth:'1000px'}}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> <span className="badge bg-success">{product.name}</span></h5>
                        <p className="card-text my-4">{product.description}</p>
                        <p className="fws-italic">{product.conf}</p>
                        <p className="card-text">Prix : <small className="text-muted">{product.prix} Ar</small></p>
                        {unProduitEstDansLePanier(product.id) ? (
                <button
                  type="button"
                  onClick={() => supprimerProduitPanier(product)}
                  className="btn btn-sm btn-danger mt-auto"
                >
                  <i className="bi-trash me-1"></i> Retirer
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => ajouterPanier(product)}
                  className="btn btn-sm btn-warning mt-auto"
                >
                  <i className="bi-cart-fill me-1"></i> Ajouter
                </button>
              )}
                    </div>
                </div>
            </div>
        </div>
     ); 
}
 
export default Detail;