import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                {/* Nice spot for a nav, eh? */}
            </header>
            <StudentForm />
            <StudentList />
        </div>
    );
}


export default App;
