import { ProductList } from "./components/ProductList";
import { CardEmployee } from "./components/CardEmployee";  
import { useReducer } from "react";
import { employesInitialState, reducerEmployer  } from "./reducers/list_reducer";
import { 
  Alert, 
  Button, 
  Col, 
  Row 
} from 'react-bootstrap';
import TYPES from "./reducers/actionTypes";
import './App.css'

function App() {

  const [state, dispacth] = useReducer(reducerEmployer, employesInitialState);

  const addToList = (id) => {
    dispacth({
      type: TYPES.ADD_TO_LIST,
      payload: id
    })
  }

  const deleteFromList = (id) => {
    dispacth({
      type: TYPES.DELETE_EMPLOYER_FROM_LIST,
      payload: id
    })
  }

  const clearList = () => {
    dispacth({
      type: TYPES.DELETE_ALL_FROM_LIST
    })
  }

  const calculateTotal = () => {
    dispacth({
      type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_LIST
    })
  }

  return (
    <>
      <h2 className="subtitle">
        Determine the monthly expense allocation warranted a manager  
      </h2>

      <div className="container_grid">
        {
          state.employes.map( (employer)=> {
            return <ProductList key={ employer.id } data={ employer } addToList={ addToList } />
          })
        }
      </div>
      <hr />
      <div className="container_grid_list">
        {
          state.containerEmploye.map( (employerList) => {
            return <CardEmployee  data={ employerList} deleteFromList={ deleteFromList } key={employerList.id + Math.random() * 50}/>
          })
        }
      </div>

      <hr />
      <Row>
        <Col>
          <div className='container'>
            <Button className="btn btn-total" onClick={ () => calculateTotal() } variant="info" size="sm">
              Total
            </Button>
              {
                state.totalPrice > 0 && <p className="manager_should"> Manager A’s allocation should be: $ { state.totalPrice } </p>
              }
          </div>
        </Col>
        <Col>
            <Button className="btn btn-clear" onClick={ () => clearList() } variant="info" size="sm">
              Clear
            </Button>
        </Col>
      </Row>

  <div className="space"></div>
        {
          state.containerEmploye.length === 0 && 
          <Alert variant="danger">
            <p className="alert">There are no employes in the list</p>
          </Alert>
        }
    </>
  );
}

export default App;
