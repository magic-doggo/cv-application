import { useState } from "react";

export function PracticalExperience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [nextId, setNextId] = useState(0);
    const [experienceEntries, setExperienceEntries] = useState([]);

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value)
    }
    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value)
    }
    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }
    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }



    function addExperience() {
        setExperienceEntries([...experienceEntries, {
            companyName: companyName,
            positionTitle: positionTitle,
            startDate: startDate,
            endDate: endDate,
            description: description,
            id: (nextId)
        }]);
        setNextId(nextId + 1);
        console.log(nextId);
        console.log(experienceEntries);
    }


    return (
        <div className="add-experience-section">
            <div>Experience</div>
            <form onSubmit={e => { e.preventDefault(); addExperience() }}>
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                    value={companyName} onChange={handleCompanyNameChange} />

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
                    value={positionTitle} onChange={handlePositionTitleChange} />

                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                    value={startDate} onChange={handleStartDateChange} />

                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                    value={endDate} onChange={handleEndDateChange} />

                <label htmlFor="description">Description: </label>
                <textarea type="text" name="description" id="description" placeholder="Description"
                    value={description} onChange={handleDescriptionChange}></textarea>
                <button type="submit">Add Experience</button>
            </form>
            
            {experienceEntries.map(experience => (
                <li key={experience.id}>
                    <div>{experience.companyName}</div>
                    <div>{experience.positionTitle}</div>
                    <div>{experience.startDate} - {experience.endDate}</div>
                    <div>{experience.description}</div>
                </li>
            ))}
        </div>
    )
}