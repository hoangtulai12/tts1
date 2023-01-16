import './App.css';
import Posts from './pages/Posts';
import Users from './pages/Users';
import EditUser from './components/EditUser';
import { Routes, Route, useParams } from 'react-router-dom';
import Topbar from './components/Topbar';
function App() {
  return (
    <div className="App" >
    <Topbar></Topbar>
    <Routes>
      <Route path='/users/:pageParams/:perPageParams' exact element ={<Users/>}></Route>
      <Route path='/users' exact element ={<Users/>}></Route>
      <Route path='/posts/:pageParams/:perPageParams' exact element ={<Posts/>}></Route>
      <Route path='/posts' exact element ={<Posts/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
