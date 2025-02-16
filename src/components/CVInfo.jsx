import { useState } from "react";
import { PracticalExperienceForm } from "./PracticalExperienceForm";
import { EducationForm } from "./EducationForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import TempExperienceForm from "./TempExperienceForm"
import TempEducationForm from "./TempEducationForm";

export function CVPage() {
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [educationEntries, setEducationEntries] = useState([]);
    const [personalDetails, setPersonalDetails] = useState([]);
    const [nextId, setNextId] = useState(0);

    const [editExistingExperience, setEditExistingExperience] = useState(null);
    const [editExistingEducation, setEditExistingEducation] = useState(null);


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
    }
    function selectEditingEducation(education) {
        setEditExistingEducation(education);
    }

    function updateExperienceEntry(updatedEntry) {
        setExperienceEntries(experienceEntries.map(entry => (
            entry.id == updatedEntry.id ? updatedEntry : entry
        )))
        setEditExistingExperience(null);
    }

    function updateEducationEntry(updatedEntry) {
        setEducationEntries(educationEntries.map(entry => (
            entry.id == updatedEntry.id ? updatedEntry : entry
        )))
        setEditExistingEducation(null);
    }

    return (
        <div className="cv-info">
            <div className="forms-container">
                <PersonalDetailsForm addPersonalDetailsEntry={addPersonalDetails}></PersonalDetailsForm>
                
                <div className="practical-experience-forms-container">
                    {!editExistingExperience ? (<PracticalExperienceForm addExperienceEntry={addExperience}></PracticalExperienceForm>) : null}
                    {editExistingExperience ? (<TempExperienceForm entry={editExistingExperience} updateExperienceEntry={updateExperienceEntry}></TempExperienceForm>) : null}
                    {!editExistingExperience ? (experienceEntries.map(experience =>
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
                    )) : null}
                </div>

                <div className="education-forms-container">
                    {!editExistingEducation ? <EducationForm addEducationEntry={addEducation}></EducationForm> : null}
                    {editExistingEducation ? (<TempEducationForm entry={editExistingEducation} updateEducationEntry={updateEducationEntry}></TempEducationForm>) : null}
                    {!editExistingEducation ? (educationEntries.map(education =>
                        (<div key={education.id}>
                            <button onClick={() => selectEditingEducation(education)}>Edit {education.school}</button>
                            <button onClick={() => {
                                setEducationEntries(
                                    educationEntries.filter(edu =>
                                        edu.id !== education.id
                                    )
                                )
                            }}>Delete {education.school}</button>
                        </div>)
                    )) : null}
                </div>

            </div>

            <div className="cv-paper">
                {/* <h1>CV</h1> */}
                <div className="personal-details-header">
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}