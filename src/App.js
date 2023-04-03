import "./App.css";
import Header from "./components/Header";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {

  const numberState=useSelector((state)=> state.changeNumber );
  const dispatch=useDispatch();

  return (
    <>
      <Header/>
      <div className="container">
        <div className="row   align-items-center py-5" >
           <div className="col-md-6 col-10 d-flex ">
                  <div className="">
                    <button className="btn btn-dark mx-1 h44 px-4" onClick={()=>dispatch(decNumber())}> <h4> - </h4> </button>
                  </div>
                  <div className="w100">
                    <input className="form-control h44  text-center" readOnly type="text"  value={numberState} />
                  </div>
                  <div className="">
                    <button className="btn btn-success mx-1 h44 px-4" onClick={()=>dispatch(incNumber())} > <h4> +  </h4>  </button>
                  </div>
           </div> 
        </div>
      </div>
    </>
  );
}

export default App;
