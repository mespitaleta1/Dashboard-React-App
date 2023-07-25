import ProductTable from './components/ProductTable/ProductTable';
import Filter from './components/Filter';

import './App.css'
import { useState } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState(""); 

  return (
    <>
      <div className="layout-container">
        <div className='aside-box'>
          <Filter TextValue={filterValue} onChange={(e) => {
              setFilterValue(e.target.value);
          }}/>
        </div>
        <ProductTable filterText={filterValue}/>
      </div>
    </>
  )
}

export default App
