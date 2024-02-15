import UseApiContext from "./context/UseApiContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import List from "./components/List";
import Home from "./components/Home";


function App() {

  return (
    <UseApiContext>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<List />} />
        </Routes>
      </BrowserRouter>
    </UseApiContext>
  );
}

export default App;
