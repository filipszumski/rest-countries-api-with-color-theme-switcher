import axios from "axios";

export const fetchCountriesInfo = async () => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;region;subregion;population;borders;nativeName;currencies;languages;flag;alpha3Code");
    return response.data;
}


