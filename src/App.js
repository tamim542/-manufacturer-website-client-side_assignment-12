
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import MyOrder from './components/Dashboard/MyOrder';
import AddReview from './components/Dashboard/AddReview';
import Footer from './components/Footer/Footer';
import AddMyInfo from './components/Dashboard/MyProfile/AddMyInfo';
import UpdateMyInfo from './components/Dashboard/MyProfile/UpdateMyInfo';
import NotFound from './components/NotFound/NotFound';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import AddProduct from './components/AddProduct/AddProduct';
import ManageOrder from './components/ManageOrder/ManageOrder';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Users from './components/MakeAdmin/Users';


function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
       <Route path='/manageorder' element={<ManageOrder></ManageOrder>}></Route>
       <Route path='/manageproduct' element={<ManageProduct></ManageProduct>}></Route>
       <Route path='/makeadmin' element={<Users></Users>}></Route>

       <Route path="/purchase/:id" element={
        <RequireAuth>
        <Purchase></Purchase>
        </RequireAuth>}> 
        </Route>


        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addmyinfo" element={<AddMyInfo></AddMyInfo>}></Route>
          <Route path="updatemyinfo/:id" element={<UpdateMyInfo></UpdateMyInfo>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          
        </Route>
        <Route path="*" element={<NotFound/>} />
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
