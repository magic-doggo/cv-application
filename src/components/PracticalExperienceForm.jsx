import { useState } from "react";

//maybe add additional true/false parameter? If true, submits new entry
//if false, edits existing entry?
export function PracticalExperienceForm({ addExperienceEntry, editExperience, isCurrentlyEditing, updateExperienceEntry }) {
    const [companyName, setCompanyName] = useState(editExperience ? editExperience.companyName : '');
    const [positionTitle, setPositionTitle] = useState(editExperience ? editExperience.positionTitle : '');
    const [startDate, setStartDate] = useState(editExperience ? editExperience.startDate : '');
    const [endDate, setEndDate] = useState(editExperience ? editExperience.endDate : '');
    const [description, setDescription] = useState(editExperience ? editExperience.description : '');
    const [editedCompanyName, setEditedCompanyName] = useState(false);
    const [editedPositionTitle, setEditedPositionTitle] = useState(false);
    const [editedStartDate, setEditedStartDate] = useState(false);
    const [editedEndDate, setEditedEndDate] = useState(false);
    const [editedDescription, setEditedDescription] = useState(false);

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
        setEditedCompanyName(true);
    }
    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
        setEditedPositionTitle(true);
    }
    function handleStartDateChange(e) {
        setStartDate(e.target.value);
        setEditedStartDate(true);
    }
    function handleEndDateChange(e) {
        setEndDate(e.target.value);
        setEditedEndDate(true);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
        setEditedDescription(true);
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
            { console.log(editExperience, " asd ", editExperience.companyName) }
        }
        else addExperienceEntry({
            companyName,
            positionTitle,
            startDate,
            endDate,
            description
        });
        clearForm();
        setEditedCompanyName(false);
        setEditedPositionTitle(false);
        setEditedStartDate(false);
        setEditedEndDate(false);
        setEditedDescription(false);
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
            onChange={handleCompanyNameChange}
            value={editExperience ? ((companyName == '' && editedCompanyName == false) ? (editExperience.companyName) : companyName) : companyName} 
            />

            <label htmlFor="positionTitle">Position Title: </label>
            <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
            onChange={handlePositionTitleChange}
            value={editExperience ? ((positionTitle == ''  && editedPositionTitle == false) ? editExperience.positionTitle : positionTitle) : positionTitle}  />

            <label htmlFor="startDate">Start Date: </label>
            <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
            onChange={handleStartDateChange} 
            value={editExperience ? ((startDate == '' && editedStartDate == false) ? editExperience.startDate : startDate) : startDate} />

            <label htmlFor="endDate">End Date: </label>
            <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
            onChange={handleEndDateChange}
            value={editExperience ? ((endDate == '' && editedEndDate == false ) ? editExperience.endDate : endDate) : endDate} />

            <label htmlFor="description">Description: </label>
            <textarea type="text" name="description" id="description" placeholder="Description"
            onChange={handleDescriptionChange}
            value={editExperience ? ((description == '' && editedDescription == false) ? editExperience.description : description) : description}>
            </textarea>
            <button type="submit">{isCurrentlyEditing ? 'Submit changes' : 'Add Experience'}</button>
        </form>
    )
}

//only steps left are:
//- set setEdited states to false when pressing edit buttons - right now it only works on submit
//- onChange does not trigger the form "value" is changed automatically.
//hence the state is not changing when editing an entry unless I modify each field. if I submit without editing a field, it will be empty