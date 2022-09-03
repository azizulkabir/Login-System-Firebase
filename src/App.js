import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Pages/Athenication/Login/Login';
import Register from './Component/Pages/Athenication/Register/Register';
import Header from './Component/Pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
