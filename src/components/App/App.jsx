import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';

function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                </header>
        <Router>
            
                <ul>
                    <li>
                        <link to="home">Home</link>
                    </li>
                     <li>
                       <link to="/about">About</link>
                     </li>
                    <li>
                        <link to="/students">Students</link>
                    </li>
                </ul>
            

      
        
               <Route path="/" exact>
                    <Home />
                 </Route>
               <Route path="/about" exact>
                    <About />
                 </Route>
               <Route path="/students" exact>
                     <Students />
                 </Route>
                 <Route path="/StudentForm" exact>
                    <StudentForm />
                 </Route>
                 <Route path="/StudentForm" exact>
                     <StudentList />
                 </Route>
               </Router>
        </div>
    
    );
    
}


export default App;
