import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Business from "./component/Pages/Business";
import Categories from "./component/Pages/Categories";
import Food from "./component/Pages/Food";
import Home from "./component/Pages/Home";
import Technology from "./component/Pages/Technology";
import Travel from "./component/Pages/Travel";
import Layout from "./Hoc/Navigation/Layout";

function App() {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/business" element={<Business/>}/>
        </Routes>
      </Layout>
    </Router>

    </>
  );
}

export default App;
