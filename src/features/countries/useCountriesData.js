import { useState, useEffect, useRef } from "react";
import countriesInfo from "../../services/countries.json";

export const useCountriesData = () => {
    const [countriesData, setCountriesData] = useState(({
        state: "loading"
    }));
    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;

        const fetchData = async () => {
            try {
                const response = await countriesInfo;
                if (mounted.current) {
                    setCountriesData({
                        state: "success",
                        countries: response
                    })
                }
            } catch {
                if (mounted.current) {
                    setCountriesData({
                        state: "error",
                    })
                }
            }
        }

        setTimeout(fetchData, 1000)

        return () => mounted.current = false;
    }, [])

    return countriesData;
};