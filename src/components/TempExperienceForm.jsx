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
        <div className="edit-experience-section">
            <h2>Edit Existing Experience: </h2>
            <form onSubmit={e => onSubmit(e)}>
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                    onChange={handleEditedCompanyNameChange}
                    value={editedCompanyName}
                />
                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
                    onChange={handleEditedPositionTitleChange}
                    value={editedPositionTitle}
                />
                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                    onChange={handleEditedStartDateChange}
                    value={editedStartDate}
                />
                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                    onChange={handleEditedEndDateChange}
                    value={editedEndDate}
                />
                <label htmlFor="description">Description: </label>
                <textarea type="text" name="description" id="description" placeholder="Description"
                        onChange={handleEditedDescriptionChange}
                        value={editedDescription}>
                    </textarea>
                <button type="submit">Submit Experience Changes</button>
            </form>
        </div>
    )
}