import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Component/Login'
import About from './Component/About'
import SignUp from './Component/Signup';
import Navbar from './Component/Navbar';
import Nomatch from './Component/Nomatch';
import Home from './Component/Home';
import Form from './Component/Form';
import AuthProvider from './Component/Auth'
import Admin from './Component/Admin';
import Profile from './Component/Profile';
import Service from './Component/Service'
import Footer from './Component/Footer'


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
      <Routes>
      <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='*' element={<Nomatch />}/>
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
