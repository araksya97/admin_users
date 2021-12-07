import './App.scss';
// import AddUser from './components/AddUser';
import Users from './components/users/Users';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/pages/home/Home';
import Nav from './components/nav/Nav'
import AddUser from './components/addUser/AddUser';
import EditUser from './components/addUser/EditUser';




function App() {
  return (
    <>
    {/* <AddUser/>
    <Users/> */}
   
    <Router>
      <Nav />
      <Switch>
         <Route exact path='/' component={Users} />
         <Route exact path='/adduser' component={AddUser} />
         <Route exact path='/edituser/:id' component={EditUser} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
