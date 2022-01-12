import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header";
import SignUpModal from "./components/SignUpModal";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import Activities from "./pages/Activities";
import SearchResult from "./pages/SearchResult";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <SignUpModal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
        <Route path="/activities" element={<Activities />} />
        <Route path="/result" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
