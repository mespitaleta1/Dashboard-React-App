import ProductTable from './components/ProductTable/ProductTable';
import Filter from './components/Filter';
import Summary from './components/Summary/Summary';
import { ProductListProvider } from './context/ProductListContext';

import './App.css'
import { useState } from 'react';

function App() {
  const [filterValue, setFilterValue] = useState(""); 

  return (
      <ProductListProvider>
          <div className="layout-container">
          <Summary>
              <Filter TextValue={filterValue} onChange={(e) => {setFilterValue(e.target.value);}}/>
          </Summary>
            <ProductTable filterText={filterValue}/>
          </div>
     </ProductListProvider>
  )
}

export default App
