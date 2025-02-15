import { useState } from "react";
import { PracticalExperienceForm } from "./PracticalExperienceForm";
import { EducationForm } from "./EducationForm";
import PersonalDetailsForm from "./PersonalDetailsForm";


//make new component for listing existing experiences, and add delete button next to it. maybe it will make the edit logic easier to figure out
export function CVPage() {
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [educationEntries, setEducationEntries] = useState([]);
    const [personalDetails, setPersonalDetails] = useState([]);
    const [nextId, setNextId] = useState(0);

    const [editExistingExperience, setEditExistingExperience] = useState(null);


    function addExperience(entry) {
        setExperienceEntries([...experienceEntries, { ...entry, id: nextId }]);
        setNextId(nextId + 1);
    }

    function addEducation(entry) {
        setEducationEntries([...educationEntries, { ...entry, id: nextId }]);
        setNextId(nextId + 1);
    }

    function addPersonalDetails(entry) {
        setPersonalDetails(entry);
    }

    function selectEditingExperience(experience) {
        setEditExistingExperience(experience);

        // console.log(experience)
        // console.log(editExistingExperience)
    }

    function updateExperienceEntry(updatedEntry) {
        setExperienceEntries(experienceEntries.map(entry => (
            entry.id == updatedEntry.id ? updatedEntry : entry
        )))
        console.log(experienceEntries);
        setEditExistingExperience(null);
    }

    //
    return (
        <div>
            <div className="forms-container">
                <PersonalDetailsForm addPersonalDetailsEntry={addPersonalDetails}></PersonalDetailsForm>
                <PracticalExperienceForm addExperienceEntry={addExperience} editExperience={editExistingExperience}
                    isCurrentlyEditing={editExistingExperience ? true : false} updateExperienceEntry={updateExperienceEntry}
                ></PracticalExperienceForm>
                {editExistingExperience ? (<TempForm entry={editExistingExperience} updateExperienceEntry={updateExperienceEntry}></TempForm>) : null}
                {experienceEntries.map(experience =>
                (<div key={experience.id}>
                    <button onClick={() => selectEditingExperience(experience)}>Edit {experience.companyName}</button>
                    <button onClick={() => {
                        setExperienceEntries(
                            experienceEntries.filter(xp =>
                                xp.id !== experience.id
                            )
                        )
                    }}>Delete {experience.companyName}</button>
                </div>)
                )}
                <EducationForm addEducationEntry={addEducation}></EducationForm>
            </div>

            <div className="cv-paper">
                <h1>CV</h1>
                <div>
                    <ul>
                        <li>Full Name: {personalDetails.fullName}</li>
                        <li>Email address: {personalDetails.email}</li>
                        <li>Phone Number: {personalDetails.phoneNumber}</li>
                    </ul>
                </div>
                <ul>
                    {experienceEntries.map(experience => (
                        <li key={experience.id}>
                            <div>Company Name: {experience.companyName}</div>
                            <div>Position Title: {experience.positionTitle}</div>
                            <div>Work period: {experience.startDate} - {experience.endDate}</div>
                            <div>Description: {experience.description}</div>
                        </li>
                    ))}
                </ul>
                <ul>
                    {educationEntries.map(education => (
                        <li key={education.id}>
                            <div>School: {education.school}</div>
                            <div>Degree: {education.degree}</div>
                            <div>Study period: {education.startDate} - {education.endDate}</div>
                            <button onClick={() => {
                                setEducationEntries(
                                    educationEntries.filter(edu =>
                                        edu.id !== education.id
                                    )
                                )
                            }}>Delete {education.school}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function TempForm({ entry, updateExperienceEntry }) {
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
//make edit experience buttons interactive. when  clicked, empty form should be replaced with existing info from entry being edited
//will need to move delete buttons to be part of the form too, not of the cv paper