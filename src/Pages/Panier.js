import { useEffect, useState } from "react";
const Panier = () =>{
    const [panier, setPanier] = useState([]);

    useEffect(() => {
      const paniers = localStorage.getItem("paniers");
      if (paniers) {
        setPanier(JSON.parse(paniers));
      }
    }, []);

    useEffect(() => {
        localStorage.setItem("paniers", JSON.stringify(panier));
      }, [panier]);

  const incrementerQuantity = (product) => {
    const modifierPanier = panier.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setPanier(modifierPanier);
  };

  const decrementerQuantiter = (product) => {
    const modifierPanier = panier.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setPanier(modifierPanier);
    };
    
  const supprimerProduitPanier = (product) => {
    setPanier((prevCart) => prevCart.filter((item) => item.id !== parseInt(product.id)));
    };
    
      // Calcule le prix total des produits dans le panier
  const Totale = () => {
    return panier.reduce(
      (total, product) => total + product.prix * product.quantity,
      0
    );
  };

    return ( 
        <div className="py-5 mb-5">
        <div className=" text-center">
          <h2>Votre panier</h2>
          <p className="lead">&nbsp;</p>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              {panier.length === 0 ? (
                <p>Votre panier est vide.</p>
              ) : (
                <>
                  
                  <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Produit</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {panier.map((product, index) => (
                  <tr key={product.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img src={`/img/${product.image}`} width="50" />
                      {product.name}
                    </td>
                    <td>
                      <div className="col">
                        <button
                          type="button"
                          onClick={() => decrementerQuantiter(product)}
                          disabled={product.quantity === 1} //On ne peut pas desincrementé lorsque la quantité === 1
                          className="btn border me-2 btn-sm"
                        >
                          -
                        </button>
                        <span className="border btn me-2 btn-sm">
                          {product.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => incrementerQuantity(product)}
                          className="btn border btn-sm"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{product.prix + ' Ar'}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => supprimerProduitPanier(product)}
                        className="btn btn-sm btn-danger float-end"
                      >
                        &#10005;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                </>
              )}
            </div>
            {panier.length > 0 && (
              <div className="col-md-4 p-2 summary">
                <div>
                  <h5>
                    <b>Résumé</b>
                  </h5>
                </div>
                <hr />
                <div className="row m-3 borderTop">
                  <div className="col my-3">PRIX TOTAL</div>
                  <div className="col text-right my-3">
                  {Totale() + " Ar"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
     );
}
 
export default Panier;