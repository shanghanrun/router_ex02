import{Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from './pages/UserPage';
import { useState } from 'react';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import MovieMoreDetail from './pages/MovieMoreDetail';
import Products from './pages/Products';
import AdminLayout from './layouts/AdminLayout';
import NotFound from './pages/NotFound';
import AboutPage from './pages/AboutPage';

function App() {
  const [auth, setAuth]= useState(false)
  const PrivateRoute=()=>{
    return auth ===true? <UserPage/> :<Navigate to='/login' />
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />}/>
          <Route path='movies'>
            <Route index element={<Movies/>} />
            <Route path=":id" element={<MovieDetail />}/>
            <Route path=':id/:num' element={<MovieMoreDetail/>} />
          </Route>
          <Route path='user' element={<PrivateRoute/>} />
          <Route path='products' element={<Products />}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}></Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
