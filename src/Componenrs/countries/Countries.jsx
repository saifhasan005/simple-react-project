import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../../../Country/Country'
const Countries = ({ fetchData }) => {
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    const handleVisitedCountries = (country) => {
        // console.log('handleVisitedCountries Clicked!!',country);
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }
    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags);
    }
    const countriesData = use(fetchData);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h3>Countries Length : {countries.length}</h3>
            <h4>Total Country visited: {visitedCountry.length}</h4>
            <h3>Total Visited Flag added : {visitedFlags.length}</h3>
            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountry.map(country => <li key={country.ccn3.ccn3}> {country.name.common}</li>)
                }
            </ol>
            <div id='countries'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags = {handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;