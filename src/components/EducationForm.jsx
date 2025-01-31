import { useState } from "react";

export function EducationForm({ addEducationEntry }) {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }
    function handleDegreeChange(e) {
        setDegree(e.target.value);
    }
    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }
    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    function clearForm() {
        setSchool('');
        setDegree('');
        setStartDate('');
        setEndDate('');
    }

    function onSubmit(e) {
        e.preventDefault();
        addEducationEntry({
            school,
            degree,
            startDate,
            endDate
        })
        clearForm();
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="school">School name: </label>
            <input type="text" name="school" id="school" placeholder="Enter school / university"
                value={school} onChange={handleSchoolChange} />

            <label htmlFor="degree">Degree: </label>
            <input type="text" name="degree" id="degree" placeholder="Enter degree / field of study"
                value={degree} onChange={handleDegreeChange} />

            <label htmlFor="startDate">Start Date: </label>
            <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                value={startDate} onChange={handleStartDateChange} />

            <label htmlFor="endDate">End Date: </label>
            <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                value={endDate} onChange={handleEndDateChange} />
            <button type="submit">Add Education</button>
        </form>
    )
}