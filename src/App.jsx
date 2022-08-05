import AdvicesCard from "./AdvicesCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__advices">
        <h1 className="App__title">Random Advices</h1>
        <AdvicesCard />
      </div>
      <h6 className="App__instruction">
        Click the Blue Button to get your advice!{" "}
      </h6>
    </div>
  );
}

export default App;
