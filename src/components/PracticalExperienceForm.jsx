import { useState } from "react";

//maybe add additional true/false parameter? If true, submits new entry
//if false, edits existing entry?
export function PracticalExperienceForm({ addExperienceEntry}) {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    // const [editedCompanyName, setEditedCompanyName] = useState(false);
    // const [editedPositionTitle, setEditedPositionTitle] = useState(false);
    // const [editedStartDate, setEditedStartDate] = useState(false);
    // const [editedEndDate, setEditedEndDate] = useState(false);
    // const [editedDescription, setEditedDescription] = useState(false);

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
        // setEditedCompanyName(true);
    }
    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
        // setEditedPositionTitle(true);
    }
    function handleStartDateChange(e) {
        setStartDate(e.target.value);
        // setEditedStartDate(true);
    }
    function handleEndDateChange(e) {
        setEndDate(e.target.value);
        // setEditedEndDate(true);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
        // setEditedDescription(true);
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
        // if (isCurrentlyEditing) {
        //     updateExperienceEntry({
        //         ...editExperience,
        //         companyName,
        //         positionTitle,
        //         startDate,
        //         endDate,
        //         description
        //     })
        //     { console.log(editExperience, " asd ", editExperience.companyName) }
        // }
        addExperienceEntry({
            companyName,
            positionTitle,
            startDate,
            endDate,
            description
        });
        clearForm();
        // setEditedCompanyName(false);
        // setEditedPositionTitle(false);
        // setEditedStartDate(false);
        // setEditedEndDate(false);
        // setEditedDescription(false);
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
            onChange={handleCompanyNameChange}
            value={companyName} 
            />

            <label htmlFor="positionTitle">Position Title: </label>
            <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
            onChange={handlePositionTitleChange}
            value={positionTitle}  />

            <label htmlFor="startDate">Start Date: </label>
            <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
            onChange={handleStartDateChange} 
            value={startDate} />

            <label htmlFor="endDate">End Date: </label>
            <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
            onChange={handleEndDateChange}
            value={endDate} />

            <label htmlFor="description">Description: </label>
            <textarea type="text" name="description" id="description" placeholder="Description"
            onChange={handleDescriptionChange}
            value={description}>
            </textarea>
            <button type="submit">Add Experience</button>
        </form>
    )
}

//only steps left are:
//- set setEdited states to false when pressing edit buttons - right now it only works on submit
//- onChange does not trigger the form "value" is changed automatically.
//hence the state is not changing when editing an entry unless I modify each field. if I submit without editing a field, it will be empty