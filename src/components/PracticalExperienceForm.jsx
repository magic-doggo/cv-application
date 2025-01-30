import { useState } from "react";
// import { CVPage } from "./CVInfo";

export function PracticalExperienceForm({addExperienceEntry}) {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

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

    function clearForm() {
        setCompanyName('');
        setPositionTitle('');
        setStartDate('');
        setEndDate('')
        setDescription('')
    }

    function onSubmit(e) {
        clearForm();
        e.preventDefault();
        addExperienceEntry({
            companyName,
            positionTitle,
            startDate,
            endDate,
            description
        });
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
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
            <button type="submit">Save changes</button>
        </form>
    )
}