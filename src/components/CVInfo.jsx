import { useState } from "react";
import { PracticalExperienceForm } from "./PracticalExperienceForm";
import { EducationForm } from "./EducationForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import TempExperienceForm from "./TempExperienceForm"
import TempEducationForm from "./TempEducationForm";
import emailLogo from '../assets/email-outline.svg';
import phoneLogo from '../assets/phone-outline.svg';

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
                        <h1>{personalDetails.fullName}</h1>
                        <div className="contact-details">
                            <div className="email">
                                {personalDetails.email ? (<img src={emailLogo} alt="email logo"/>) : null}
                                <span>{personalDetails.email}</span>
                            </div>
                            <div className="phoneNumber">
                                {personalDetails.phoneNumber ? (<img src={phoneLogo} alt="phone logo"/>) : null}
                                <span>{personalDetails.phoneNumber}</span>
                            </div>
                        </div>
                </div>
                <div className="experience-cv-section">
                    <h3>Professional Experience</h3>
                    <ul>
                        {experienceEntries.map(experience => (
                            <li key={experience.id} className="entry">
                                <div>{experience.startDate} - {experience.endDate}</div>
                                <div className="entry-details">
                                    <div className="company-name">{experience.companyName}</div>
                                    <div>{experience.positionTitle}</div>
                                    <div className="description">{experience.description}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="education-cv-section">
                    <h3>Education</h3>
                    <ul>
                        {educationEntries.map(education => (
                            <li key={education.id} className="entry">
                                <div>{education.startDate} - {education.endDate}</div>
                                <div className="entry-details">
                                    <div className="school-name">{education.school}</div>
                                    <div>{education.degree}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}