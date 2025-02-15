import { useState } from "react";

export default function TempEducationForm({ entry, updateEducationEntry }) {
    const [editedSchool, setEditedSchool] = useState(entry.school);
    const [editedDegree, setEditedDegree] = useState(entry.degree);
    const [editedStartDate, setEditedStartDate] = useState(entry.startDate);
    const [editedEndDate, setEditedEndDate] = useState(entry.endDate);

    function handleEditedSchoolChange(e) {
        setEditedSchool(e.target.value);
    }
    function handleEditedDegreeChange(e) {
        setEditedDegree(e.target.value);
    }
    function handleEditedStartDateChange(e) {
        setEditedStartDate(e.target.value);
    }
    function handleEditedEndDateChange(e) {
        setEditedEndDate(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        updateEducationEntry({
            ...entry,
            school: editedSchool,
            degree: editedDegree,
            startDate: editedStartDate,
            endDate: editedEndDate
        })
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="school">School name: </label>
            <input type="text" name="school" id="school" placeholder="Enter school / university"
                value={editedSchool} onChange={handleEditedSchoolChange} />

            <label htmlFor="degree">Degree: </label>
            <input type="text" name="degree" id="degree" placeholder="Enter degree / field of study"
                value={editedDegree} onChange={handleEditedDegreeChange} />

            <label htmlFor="startDate">Start Date: </label>
            <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                value={editedStartDate} onChange={handleEditedStartDateChange} />

            <label htmlFor="endDate">End Date: </label>
            <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                value={editedEndDate} onChange={handleEditedEndDateChange} />
            <button type="submit">Submit education changes</button>
        </form>
    )
}