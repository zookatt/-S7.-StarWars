import UseApiContext from "./context/UseApiContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./components/List";
import Button from "./utils/Button";


function App() {

  return (
    <UseApiContext>
      <Header />
      <Menu />
      <List />
      <Button />
    </UseApiContext>
  );
}

export default App;


//MENU

// |--> HOME (onClick) --
// |--> STARSHIP (onClick)

//If "click" at HOME show welcome page
//If "click" at STARSHIPS show List component