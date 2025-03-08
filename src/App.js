import Game from "./components/game";
import { DataProvider } from "./components/dataContext";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Game />
    </DataProvider>
  );
}

export default App;
