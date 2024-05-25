

import { Link } from "react-router-dom";
import LoginForm from './components/LoginRegister/LoginForm'; // Import LoginForm
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Link to="/home">Home </Link>
      <Link to="/footer">Footer </Link>
      <Link to="/loginform">LoginForm </Link>
    </div>
  );
}
// const App = () => (

//   <><Header /><Home /><Footer /></>
// );

export default App;
