import { useState, useEffect } from "react";
import Results from "./Results";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];
function SearchArea() {
    const [region, setRegion] = useState("");
    const [name, setName] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        requestCountriesRegion();
    }, [region]);

    useEffect(() => {
        requestCountries();
    }, []);

    async function requestCountries() {
        try {
            const res = await fetch(
                `https://restcountries.com/v3.1/name/${name}`
            )
            const json = await res.json();
            setCountries(json);
        } catch (error) {
            setCountries([]);
        }  
    }

    async function requestCountriesRegion() {
        try {
            const res = await fetch(
                `https://restcountries.com/v3.1/region/${region}`
            )
            const json = await res.json();
            setCountries(json);
        } catch (error) {
            setCountries([]);
        }  
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">    
            <div className="flex flex-col md:justify-between md:flex-row md:items-center py-14 ">
                <div className="h-12 leading-normal relative mb-5 flex justify-start lg:w-0 lg:flex-1 md:mb-0">
                    <form placeholder="Search for a country..."
                    className="w-4/5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        requestCountries();
                    }}>
                        <svg className="left-5 top-3.5 fill-gray-300 absolute h-5 ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <title>Search</title>
                            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                        </svg>
                        <label htmlFor="name">
                            <input id="name" 
                            placeholder="Search for a country.."
                            onChange={(e) => setName(e.target.value)}
                            className="focus:outline-none rounded-md shadow-boxShadowHeader py-2 pr-12 pl-16 text-sm h-full w-full"/>
                        </label>
                    </form>
                </div>
                <div className="h-12 leading-normal md:flex items-center justify-end md:flex-1 lg:w-0">
                    <form className="h-full" onSubmit={(e) => {
                        e.preventDefault();
                        requestCountriesRegion();
                    }}>
                        <label htmlFor="region">
                            <select id="region"
                            defaultValue="Africa"
                            className="focus:outline-none h-full rounded-md shadow-boxShadowHeader py-2 px-6 text-sm"
                            onChange={(e) => setRegion(e.target.value)}
                            onBlur={(e) => setRegion(e.target.value)}>
                                <option selected>Select a region</option>
                                {REGIONS.map((region) => (
                                    <option value={region} key={region}>{region}</option>
                                ))}
                            </select>
                        </label>
                    </form>
                </div>
            </div>
            <Results countries={countries}/>
        </div>
        
    )
}
export default SearchArea;