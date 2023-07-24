import Table from './components/Table';
import {TABLE_HEADER} from './App.constants'
import './App.css'

function App() {
  const productColumns = [
    { 
      id:1,
      title: TABLE_HEADER.SKU ,
    },
    { 
      id:2,
      title: TABLE_HEADER.NAME,
    },
    { 
      id:3,
      title: TABLE_HEADER.STOCK,
    },
    { 
      id:4,
      title: TABLE_HEADER.RESTOCK,
    },
  ]; 

  return (
    <>
      <Table columDefinition={productColumns}/>
    </>
  )
}

export default App
