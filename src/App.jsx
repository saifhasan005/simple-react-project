import { Suspense } from 'react';
import './App.css'
import Countries from './Componenrs/countries/Countries'
const fetchData = fetch('https://openapi.programming-hero.com/api/all')
  .then((data) => data.json());

function App() {


  return (
    <>
      <Suspense fallback={<h3>Loading Countries...</h3>}>
        <Countries fetchData={fetchData}></Countries>
      </Suspense>
    </>
  )
}

export default App
