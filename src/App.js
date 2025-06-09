import Game from "./components/game";
import { DataProvider } from "./components/dataContext";

function App() {
  return (
    <DataProvider>
      <Game />
    </DataProvider>
  );
}

export default App;
