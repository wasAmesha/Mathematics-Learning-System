import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/FooterNew';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Lessons from './pages/Lessons';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Courses from './pages/Courses';
import Exercises from './pages/Exercise';
import Register from './pages/Register';
import Review from './pages/Review';
import About from './pages/About';
import MyCourses from './pages/MyCourses';
import UpdateCourse from './pages/UpdateCourse';
import DropCourse from './pages/DropCourse';
import Arithmatic from './pages/Arithmatic';
import ArithmeticExercise from './pages/ArithmaticExercise';
import QuizHome from './pages/QuizHome';

function App() {
  return (
    <div className='App'>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/review' exact component={Review}/>
            <Route path='/about' exact component={About}/>
            <Route path='/lessons' exact component={Lessons}/>
            <Route path='/signup' exact component={SignUp}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/courses' exact component={Courses}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/mycourses' exact component={MyCourses}/>
            <Route path='/updatecourses/:id' exact component={UpdateCourse}/>
            <Route path='/dropcourse/:id' exact component={DropCourse}/>
            <Route path='/arithmatic' exact component={Arithmatic}/>
            <Route path='/exercises' exact component={Exercises}/>
            <Route path='/arithmeticexercise' exact component={ArithmeticExercise}/>
            <Route path='/quizes' exact component={QuizHome}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
