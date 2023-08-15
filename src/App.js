import "./App.css";
import TaxResourceForm from "./components/TaxResourceForm";
import itemsApiResponse from "./components/itemsApiResponse";
function App() {
  return (
    <div className="App">
      <TaxResourceForm itemsApiResponse={itemsApiResponse} />
    </div>
  );
}

export default App;

