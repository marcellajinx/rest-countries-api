import { StrictMode, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchArea from "./SearchArea";
import Details from "./Details";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";

const StyledApp = styled.div`
  color: $((props) => props.theme.fontColor)`;
function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
      <Router>
        <header  className="shadow-boxShadowHeader">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <h1 className="font-bold text-base sm:text-lg md:text-2xl">
                    <Link to="/">
                      Where in the world?
                    </Link>
                  </h1>
                </div>
                <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                    <button onClick={() => themeToggler()} className="flex items-center h-12 px-4 rounded-md border-none focus:outline-none hover:bg-themeButton font-semibold text-sm md:text-base">
                        <i className="far fa-moon"></i>
                        <p className="ml-3">Dark Mode</p>
                    </button>
                    
                </div>
          </div>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details/>
          </Route>
          <Route path="/">
            <SearchArea/> 
          </Route>
        </Switch>
        
      </Router>
      </StyledApp>
      </ThemeProvider>
    </div>
  );
};


ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root')
)