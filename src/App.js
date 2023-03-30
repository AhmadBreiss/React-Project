import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Product />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
