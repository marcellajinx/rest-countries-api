import {Link} from "react-router-dom";

const Country = (props) => {
    const {name, population, region, capital, flags, id} = props;
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    if(Object.keys(flags).length){
        hero = flags['png'];
    }

    return ( 
        <div className="h-80 w-64 m-auto">
            <div className="card shadow-boxShadowHeader">
                {/* <Link to={`https://restcountries.com/v3.1/name/${id}?fullText=true/`}> */}
                <Link to={`details/${id}`}>
                    <img src={ hero } alt={ name } className="card-img-top w-full h-40"/>
                    <div className="card-body px-6 py-4">
                        <h5 className="card-title font-bold text-lg pb-2">{ name }</h5>
                        <div className="card-text text-base">
                            <p><b>Population:</b> {population}</p>
                            <p><b>Region:</b> {region}</p>
                            <p><b>Capital</b> {capital}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Country;