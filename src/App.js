import './App.css';
import Header from'./components/header.js'
import Nav from './components/nav.js'
import Main from './components/main.js'
import Footer from './components/footer.js'
import Booking from"./components/bookingform.js"
function App() {
  return (
    <>
    <Nav></Nav>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <Booking></Booking>
    </>
  );
}

export default App;
