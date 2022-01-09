import Country from "./Country";

const Results = ( { countries } ) => {
    return (
        <div className="search">
            <div className="gap-y-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {!countries.length ? (
                    <h4 className="text-blue-600">No Countries Found</h4>
                ) : (
                    countries.map((country) => {
                        return(
                                <Country
                                name = {country.name.common}
                                population = {country.population}
                                region = {country.region}
                                capital = {country.capital}
                                flags = {country.flags}
                                key = {country.name.official}
                                id = {country.name.official}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Results;