import ProductTable from './components/ProductTable/ProductTable';
import Filter from './components/Filter';
import Summary from './components/Summary/Summary';

import './App.css'
import { useState } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState(""); 

  return (
    <>
      <div className="layout-container">
       <Summary>
          <Filter TextValue={filterValue} onChange={(e) => {setFilterValue(e.target.value);}}/>
       </Summary>
        <ProductTable filterText={filterValue}/>
      </div>
    </>
  )
}

export default App
