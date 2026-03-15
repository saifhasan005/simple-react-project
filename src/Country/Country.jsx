import { useState } from 'react';
import './Country.css'
export default function Country({country,handleVisitedCountries,handleVisitedFlags}){
    const [visited,setVisited] = useState(false);
    const countryCommonName = country.name.common;
    // console.log(country.flags.flags);
    const handleVisited =()=>{
        // if(visited){
        //     setVisited(false);
        // } else{
        //     setVisited(true)
        // }
        // more option
        setVisited(!visited)
        handleVisitedCountries(country);
    }
    return(
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {countryCommonName}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Population: {country.population.population}</p>
            <h4>Region: {country.region.region}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <h4>Continents: {country.continents.continents}</h4>
            <p>Area Code: {country.area.area} {country.area.area>300000? 'Big Country' : 'Small Country'}</p>
            <button className='btn' onClick={handleVisited}>{
                visited? 'Visited' : 'Not Visited'}</button>
                <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}} className='btn' style={{marginLeft:'20px'}}>Add to Visited Flag</button>
        </div>
    )
}