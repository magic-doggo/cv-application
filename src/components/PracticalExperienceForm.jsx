import { useState } from "react";

export function PracticalExperienceForm({ addExperienceEntry }) {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
    }
    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
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
        addExperienceEntry({
            companyName,
            positionTitle,
            startDate,
            endDate,
            description
        });
        clearForm();
    }

    return (
        <div className="add-experience-section">
            <h2 className="paragraph-title">Experience: </h2>
            <form onSubmit={e => onSubmit(e)}>
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                    onChange={handleCompanyNameChange}
                    value={companyName}
                />
                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
                    onChange={handlePositionTitleChange}
                    value={positionTitle} />
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
        </div>
    )
}