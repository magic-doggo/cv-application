import { useState } from "react";

export default function TempExperienceForm({ entry, updateExperienceEntry }) {
    const [editedCompanyName, setEditedCompanyName] = useState(entry.companyName);
    const [editedPositionTitle, setEditedPositionTitle] = useState(entry.positionTitle);
    const [editedStartDate, setEditedStartDate] = useState(entry.startDate);
    const [editedEndDate, setEditedEndDate] = useState(entry.endDate);
    const [editedDescription, setEditedDescription] = useState(entry.description);


    function handleEditedCompanyNameChange(e) {
        setEditedCompanyName(e.target.value);
    }
    function handleEditedPositionTitleChange(e) {
        setEditedPositionTitle(e.target.value);
    }
    function handleEditedStartDateChange(e) {
        setEditedStartDate(e.target.value);
    }
    function handleEditedEndDateChange(e) {
        setEditedEndDate(e.target.value);
    }
    function handleEditedDescriptionChange(e) {
        setEditedDescription(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        updateExperienceEntry({
            ...entry,
            companyName: editedCompanyName,
            positionTitle: editedPositionTitle,
            startDate: editedStartDate,
            endDate: editedEndDate,
            description: editedDescription
        })
        console.log(editedCompanyName, entry)
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                onChange={handleEditedCompanyNameChange}
                value={editedCompanyName}
            />

            <label htmlFor="positionTitle">Company Name: </label>
            <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Company Name"
                onChange={handleEditedPositionTitleChange}
                value={editedPositionTitle}
            />

            <label htmlFor="startDate">Company Name: </label>
            <input type="text" name="startDate" id="startDate" placeholder="Enter Company Name"
                onChange={handleEditedStartDateChange}
                value={editedStartDate}
            />

            <label htmlFor="endDate">Company Name: </label>
            <input type="text" name="endDate" id="endDate" placeholder="Enter Company Name"
                onChange={handleEditedEndDateChange}
                value={editedEndDate}
            />

            <label htmlFor="description">Company Name: </label>
            <input type="text" name="description" id="description" placeholder="Enter Company Name"
                onChange={handleEditedDescriptionChange}
                value={editedDescription}
            />
            <button type="submit">Submit changes</button>
        </form>
    )
}