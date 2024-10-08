import axios from 'axios';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './StudentForm.css'


function StudentForm() {
    
    const [student, setStudent] = useState('');
    // const navigate = useNavigate();


    // Called when the submit button is pressed
    const addStudent = (newStudent) => {
        // POST student to the server
        axios({
            method: 'POST',
            url: '/api/students',
            data: {github_name: newStudent}
        }).then((response) => {
            // navigate('/students')
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    };

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(student);
        clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent('');
    }


    return (
        <div className="StudentForm">
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => setStudent(event.target.value)} 
                      placeholder="GitHub username"
                      value={student} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    
}


export default StudentForm;
