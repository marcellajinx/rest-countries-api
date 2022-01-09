import { Link } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";

const Header = () => {
    const {theme, setTheme} = useState("light");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return(
        <header>
            <div className="title">
                <Link to="/">
                    <h6 className="font-body">Where in the world?</h6>
                </Link>
                <div className="dark-mode" onClick={() => themeToggler()}>
                    <button>
                        <i className="far fa-moon"></i>
                        <p>Dark Mode</p>
                    </button>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;