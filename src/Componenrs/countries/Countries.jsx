import React,{use} from 'react';
import './Countries.css'
import Country from '../../../Country/Country'
const Countries = ({fetchData}) => {
    const countriesData = use(fetchData);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h3>Countries Length : {countries.length}</h3>
            <div id='countries'>
                {
                countries.map(country=> <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;