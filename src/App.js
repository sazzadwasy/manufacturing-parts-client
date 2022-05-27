import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './pages/Cashing/Purchase';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Login from './pages/Logins/Login';
import Signup from './pages/Logins/Signup';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import ReviewAdd from './pages/Dashboard/ReviewAdd';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:partId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<ReviewAdd></ReviewAdd>}></Route>
        </Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
