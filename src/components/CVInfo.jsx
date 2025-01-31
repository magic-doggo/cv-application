import { useState } from "react";
import { PracticalExperienceForm } from "./PracticalExperienceForm";
import { EducationForm } from "./EducationForm";
import PersonalDetailsForm from "./PersonalDetailsForm";

export function CVPage() {
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [educationEntries, setEducationEntries] = useState([]);
    const [personalDetails, setPersonalDetails] = useState([]);
    const [nextId, setNextId] = useState(0);


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

    return (
        <div>
            <PersonalDetailsForm addPersonalDetailsEntry={addPersonalDetails}></PersonalDetailsForm>
            <PracticalExperienceForm addExperienceEntry={addExperience}></PracticalExperienceForm>
            <EducationForm addEducationEntry={addEducation}></EducationForm>

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
                        <div>{experience.companyName}</div>
                        <div>{experience.positionTitle}</div>
                        <div>{experience.startDate} - {experience.endDate}</div>
                        <div>{experience.description}</div>
                        <button onClick={() => {
                            setExperienceEntries(
                                experienceEntries.filter(xp =>
                                    xp.id !== experience.id
                                )
                            )
                        }}>Delete {experience.companyName}</button>
                    </li>
                ))}
            </ul>

            <ul>
                {educationEntries.map(education => (
                    <li key={education.id}>
                        <div>{education.school}</div>
                        <div>{education.degree}</div>
                        <div>{education.startDate} - {education.endDate}</div>
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
    )
}