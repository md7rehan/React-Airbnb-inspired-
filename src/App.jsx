import Nav2 from "./components/Nav2";
import Searchbar from "./components/Searchbar";
import Iconbar from "./components/Iconbar";
import CardGrid from "./components/CardGrid";
import PastCards from "./components/PastCards";
import Footer from "./components/Footer";


const App = () => {
  const pageStyle = {
  };
  return (
    < div style={pageStyle} >
      <Nav2 />

      <Searchbar />

      <hr className="thin-dark-line" style={{ margin: '20px 0' }} />

      <Iconbar />

      <CardGrid />

      <PastCards />

      <Footer />

    </div>
  );
};

export default App;

