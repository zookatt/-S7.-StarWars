import UseApiContext from "./context/UseApiContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./components/List";
import StarshipData from "./components/StarshipData";


function App() {

  return (
    <UseApiContext>
      <Header />
      <Menu />
      {/* <StarshipData /> */}
      <List />
    </UseApiContext>
  );
}

export default App;


//MENU

// |--> HOME (onClick) --
// |--> STARSHIP (onClick)

//If "click" at HOME show welcome page 
//If "click" at STARSHIPS show List component