import { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Border from "./Border"

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${this.props.match.params.id}?fullText=true/`
    );
    const json = await res.json();
    // this.setState(Object.assign({ loading: false }, json.country[0]));
    this.setState(Object.assign({ loading: false }, json[0]));
  }

  render() {
    if (this.state.loading) {
      return(
        <div className="load">
          <h4>Loading ... </h4>;
        </div>
      )
    }
    const {
      flags,
      name,
      commonName = name.common,
      population,
      region,
      subregion,
      capital,
      tld,
      borders,
      currencies,
      languages,
      altSpellings
    } = this.state;

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    if(Object.keys(flags).length){
        hero = flags['png'];
    }
    const language = Object.values(languages).join(', ');

    return (
      <div className="details max-w-7xl mx-auto px-4 sm:px-6">
      <Link to="/" className="shadow-boxShadowHeader">
        <button className="h-10 w-32 rounded-md leading-4 my-16 shadow-boxShadowHeader">	&#8592; Back</button>
      </Link>
      <div className="details flex flex-col lg:flex-row row row-cols-sm-1 row-cols-lg-2 lg:items-start row row-cols-sm-1 row-cols-lg-2">
          <div className="details-img lg:pr-20">
              <img src={ hero } alt="flag" className="card-img-top h-96 m-auto md:max-w-2xl"/>
          </div>
          <div className="details-info sm:w-11/12 md:w-9/12 sm:m-auto">
            <div className="flex flex-col h-full">
              <h1 className="mt-8 mb-12 text-4xl lg:mt-0"><b>{commonName}</b></h1>
              <div className="row flex justify-between flex-col sm:flex-row row-cols-sm-1 row-cols-lg-2 mb-16 lg:justify-start">
                  <div className="text-base leading-8 details-left pb-6 pr-6 md:pb-0">
                      <p><b>Native Name: </b>{altSpellings[1]}</p>
                      <p><b>Population: </b>{population}</p>
                      <p><b>Region: </b>{region}</p>
                      <p><b>Sub Region: </b>{subregion}</p>
                      <p><b>Capital: </b>{capital}</p>
                  </div>
                  <div className="text-base leading-8 details-right">
                      <p><b>Top Level Domain: </b>{tld[0]}</p>
                      <p><b>Currencies: </b>{currencies[Object.keys(currencies)[0]].name}</p>
                        <p><b>Languages: </b>{language}</p>
                  </div>
              </div>
              <div className="flex">
                <p><b>Border Countries: </b></p>
                <div className="borders flex min-w-6">
                  {borders === undefined ? (" -") : (
                  borders.map((border) => {
                    return(      
                      <div>
                          <Border
                          border = {border}
                          key = {border}
                          /> 
                      </div>
                    )
                  }))}
                </div>
              </div>   
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Details); 