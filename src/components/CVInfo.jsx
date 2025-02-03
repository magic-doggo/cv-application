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

//make edit experience buttons interactive. when  clicked, empty form should be replaced with existing info from entry being edited
//will need to move delete buttons to be part of the form too, not of the cv paper