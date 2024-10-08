import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About.jsx';


function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                </header>
        <Router>
            <nav>
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
                  </nav>
               </Router>
        </div>
    
    );
    
}
// function studentFormList() {
//     const navigate = useNavigate();

//     const onSubmit = () => {
//         navigate('/students');
//     };
//     return (

//     <StudentForm onSubmit={onSubmit} />

// )};

export default App;
