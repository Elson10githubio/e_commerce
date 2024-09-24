import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {

    // Récupère l'emplacement actuel de l'application à l'aide du hook useLocation
    const location = useLocation();

    // Stocke le chemin d'accès actuel dans la variable currentRoute
    const currentRoute = location.pathname;

    //Si path ==='/' alors execute le bootstrap text-info si non ''
    if (currentRoute == '/') {
        return null
    }else{
        return (
            <nav className="navbar" style={{ borderBottom: 0 }}>
                <div>
                    <Link className="logo" to="/">Boutik'nakay</Link>
                </div>
                <ul className="liens">
                    <li>
                        <Link to="/acceuil" className={`${currentRoute === '/acceuil' ? ' text-incl fw-bolder' : ''}  btn border
    btn border`}>Acceuil</Link>
                    </li>
    
                    <li>
                        <Link to="/panier" className={`${currentRoute === '/panier' ? 'text-incl fw-bolder' : ''} btn border
    btn border`}>Mon panier</Link>
                    </li>
                </ul>
            </nav>
    
        )
    }
};

export default Navbar;