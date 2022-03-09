import {Container} from 'react-bootstrap'
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <main className="py-3">
              <Container>
                  <Routes>
                    <Route path="/" element={<HomeScreen/>} exact/>
                    <Route path="product/:id" element={<ProductScreen/>}/>
                  </Routes>
              </Container>
          </main>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
