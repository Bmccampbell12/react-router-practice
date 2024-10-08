import React from 'react';
import { useHistory } from "react-router-dom";




function About() {
    return (
          <div>
            <h2>About</h2>
               <p>This App allows users to add and view students based on their GitHub usernames. 
                This includes the ability to switch between different 'experiences' within the App itself.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN9cxZ65pxfVfVLoXULx1ZfMVYJhJGu17Lw&s" />
        </div>
    
)};

function App() {
    return (
        <Router>
            
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                     <li>
                       <Link to="/about">About</Link>
                     </li>
                    <li>
                        <Link to="/students">Students</Link>
                    </li>
                </ul>
            

      
        
               <Route path="/home" exact>
                    <StudentForm />
                 </Route>
               <Route path="/about" exact>
                    <About />
                 </Route>
               <Route path="/students" exact>
                    <StudentList />
                  </Route>
               </Router>

    )
}

export default About;