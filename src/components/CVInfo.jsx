import { useState } from "react";
import { PracticalExperienceForm } from "./PracticalExperienceForm";

export function CVPage() {
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [nextId, setNextId] = useState(0);


    function addExperience(entry) {
        setExperienceEntries([...experienceEntries, {...entry, id: nextId }]);
        setNextId(nextId + 1);
    }

    return (
        <div>
            <PracticalExperienceForm addExperienceEntry={addExperience}></PracticalExperienceForm>
            {console.log(experienceEntries)}
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
        </div>
    )
}