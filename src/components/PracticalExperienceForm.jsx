import { useState } from "react";

//maybe add additional true/false parameter? If true, submits new entry
//if false, edits existing entry?
export function PracticalExperienceForm({ addExperienceEntry, editExperience, isCurrentlyEditing, updateExperienceEntry }) {
    const [companyName, setCompanyName] = useState(editExperience ? editExperience.companyName : '');
    const [positionTitle, setPositionTitle] = useState(editExperience ? editExperience.positionTitle : '');
    const [startDate, setStartDate] = useState(editExperience ? editExperience.startDate : '');
    const [endDate, setEndDate] = useState(editExperience ? editExperience.endDate : '');
    const [description, setDescription] = useState(editExperience ? editExperience.description : '');

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
        e.preventDefault();
        if (isCurrentlyEditing) {
            updateExperienceEntry({
                ...editExperience,
                companyName,
                positionTitle,
                startDate,
                endDate,
                description
            })
            {console.log(editExperience, " asd ", editExperience.companyName)}
        }
        else addExperienceEntry({
            companyName,
            positionTitle,
            startDate,
            endDate,
            description
        });
        clearForm();
    }

    // function storeValues() {
    //     let tempCompanyName = editExperience.companyName;
    //     return tempCompanyName;
    // }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                // value={editExperience ? storeValues(): companyName} onChange={handleCompanyNameChange} />
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
            <button type="submit">{isCurrentlyEditing ? 'Submit changes' : 'Add Experience'}</button>
        </form>
    )
}