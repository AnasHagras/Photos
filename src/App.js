import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container";
import InputField from "./components/InputField";
import "./index.css";
import { add } from "./store/actions/mainContainersActions";
import { tryFilter } from "./utils/test";
function App() {
  const size = useSelector((state) => state.mainContainer);
  const dispatch = useDispatch();
  const increaseCounter = (event) => {
    tryFilter();
    event.preventDefault();
    dispatch(add());
  };
  return (
    <div className="container">
      <button onClick={increaseCounter} className="increase">
        add container
      </button>
      <div className="App">
        {Array(size)
          .fill(0)
          .map((_, index) => {
            return <Container containerid={index} key={index}></Container>;
          })}
      </div>
    </div>
  );
}

export default App;
