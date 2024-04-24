import "./App.css";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return <h1>Home Page</h1>;
};
const AboutUs = () => {
  return <h1>About us Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
