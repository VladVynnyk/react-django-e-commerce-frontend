import {Container} from 'react-bootstrap'
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="py-3">
          <Container>
              <HomeScreen/>
          </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
