import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./components/List";
import UseApiContext from "./context/UseApiContext";

function App() {

  return (
    <UseApiContext>
      <Header />
      <Menu />
      <List />
    </UseApiContext>
  );
}

export default App;