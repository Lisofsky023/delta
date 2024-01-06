import Table from "./components/Table";
import { TableProvider } from "./context/TableContext";
import "./App.css";

function App() {

  return (
    <TableProvider>
      <div className="App">
        <Table />
      </div>
    </TableProvider>
  );
}

export default App;
