import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import GoogleLogin from './Component/Pages/Athenication/Login/GoogleLogin';
import Login from './Component/Pages/Athenication/Login/Login';
import Register from './Component/Pages/Athenication/Register/Register';
import Header from './Component/Pages/Header/Header';
import SharedComponent from './Component/SharedComponent/SharedComponent';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/loginbygoogle' element={<GoogleLogin></GoogleLogin>}></Route>
        <Route path='/shared' element={<SharedComponent></SharedComponent>}></Route>
        
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
