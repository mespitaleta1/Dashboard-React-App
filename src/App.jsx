import ProductTable from './components/ProductTable/ProductTable';
import Filter from './components/Filter';

import './App.css'

function App() {
  
  return (
    <>
      <div className="layout-container">
        <div className='aside-box'>
          <Filter/>
        </div>
     
        <ProductTable/>
      </div>
    </>
  )
}

export default App
