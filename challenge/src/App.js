import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { CardEmployee } from "./components/CardEmployee";  
import { useReducer } from "react";
import { reducerEmployer, employesInitialState } from "./reducers/list_reducer";
import TYPES from "./reducers/actionTypes";

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
      <Header />
      <h2 className="subtitle">
        Gastos Mensuales
      </h2>

      <div>
        <button className="btn btn-total">
          Total Gastos
        </button>
        <button className="btn btn-clear">
          Borrar Gastos
        </button>
      </div>

      <div className="container_grid">

      </div>
    </>
  );
}

export default App;
