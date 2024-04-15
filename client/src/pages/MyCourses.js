import {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/MyCourses.css';
import Axios from 'axios';
import StarIcon from '@mui/icons-material/Star';

function MyCourses() {

  const [usercourses,setRegisteredCourses]=useState([]);

  const userId = localStorage.getItem('userID');

  useEffect(()=>{
    const fetchRegisteredCourse=async()=>{
      try{
        const response=await Axios.get(`http://localhost:3001/usercourses/registeredcourses/${userId}`);
        setRegisteredCourses(response.data.registeredCourses);
        console.log(response.data.registeredCourses);
      }catch(err){
        console.error(err);
      }
    };
    fetchRegisteredCourse();
  },[]);
/*
  const [usercourses,setUserCourses]=useState([]);

  const userId = localStorage.getItem('userID');
  
  useEffect(()=>{
    const fetchUserCourse=async()=>{
      try{
        const response=await Axios.get("http://localhost:3001/usercourses/mycourses");
        const filteredData = response.data.filter((course) => course.userOwner === userId);
        setUserCourses(filteredData);
        console.log(filteredData);
      }catch(err){
        console.error(err);
      }
    };
    fetchUserCourse();
  },[userId]); */

  return (
     <div className='myCourses'>
    <div className='myCourseContainer'>
      <h1>Your Courses</h1>
      <ul>
        {usercourses ? (
          usercourses.map((usercourse) => (
            <ul key={usercourse._id}>
              <div className='container'>
              <div>
                <h3><StarIcon class='starIcon'/>{usercourse.courseName}</h3>
              </div>
              <div className='buttonContainer'>
                <Link to={`/updatecourses/${usercourse._id}`}>
                  <button>Update Details</button>
                </Link>
                <Link to={`/dropcourse/${usercourse._id}`}>
                  <button>Unregister</button>
                </Link>
              </div>
              </div>
            </ul>
          ))
        ) : (
          <p>No registered courses found.</p>
        )}
      </ul>
    </div>
  </div>
  )
}

export default MyCourses

/*const [registeredCourses,setRegisteredCourses]=useState([]);

  const userId = localStorage.getItem('userID');

  useEffect(()=>{
    const fetchRegisteredCourse=async()=>{
      try{
        const response=await Axios.get(`http://localhost:3001/usercourses/registeredcourses/${userId}`);
        setRegisteredCourses(response.data); 
        console.log(response.data);
        //setRegisteredCourses(response.data.registeredCourses);
        //console.log(response.data.registeredCourses);
      }catch(err){
        console.error(err);
      }
    };
    fetchRegisteredCourse();
  },[]);*/
