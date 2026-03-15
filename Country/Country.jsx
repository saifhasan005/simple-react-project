import './Country.css'
export default function Country({country}){
    const countryCommonName = country.name.common;
    // console.log(country.flags.flags);
    const handleVisited =()=>{
        console.log('on visited');
    }
    return(
        <div className="country">
            <h3>Name: {countryCommonName}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Population: {country.population.population}</p>
            <h4>Region: {country.region.region}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <h4>Continents: {country.continents.continents}</h4>
            <p>Area Code: {country.area.area} {country.area.area>300000? 'Big Country' : 'Small Country'}</p>
            <button className='btn' onClick={handleVisited}>Not Visited</button>
        </div>
    )
}