// Import and call the `Card` component inside the app component.
import Card from "../Card";
import "./App.css";
import NewButton from "../Button";
function App() {
//Call the Card component multiple times to get multiple cards displaying.
  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      <NewButton />
      <NewButton />
    </div>
  );
}

export default App;