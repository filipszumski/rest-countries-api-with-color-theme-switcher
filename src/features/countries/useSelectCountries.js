
export const useSelectCountries = (countriesData, region, queryParameter) => {

    const selectCountriesByRegion = () => {
        if (countriesData.state === "success" && region) {
            return countriesData.countries.filter(country => country.region.toUpperCase() === region.toUpperCase());
        }

        return countriesData.countries;
    };

    const selectCountriesByQuery = (countries) => {
        if (countriesData.state === "success" && queryParameter && queryParameter.trim() !== "") {
            return countries.filter(country => {
                const countryNameUppercased = country.name.toUpperCase();
                const queryTrimmedUppercased = queryParameter.trim().toUpperCase();

                return countryNameUppercased.includes(queryTrimmedUppercased);
            });
        }
        return countries;
    };

    const selectCountries = () => {
        const countries = selectCountriesByRegion();

        return selectCountriesByQuery(countries);
    };

    return selectCountries;
}