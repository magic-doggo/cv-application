import { useState } from "react";

export function PracticalExperience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [nextId, setNextId] = useState(0);
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [editExistingExperience, setEditExistingExperience] = useState(null);

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value)
    }
    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value)
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

    function addExperienceForm() {
        return (
            <form onSubmit={e => { e.preventDefault(); addExperience() }}>
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                    value={companyName} onChange={handleCompanyNameChange} />

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
                    value={positionTitle} onChange={handlePositionTitleChange} />

                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                    value={startDate} onChange={handleStartDateChange} />

                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                    value={endDate} onChange={handleEndDateChange} />

                <label htmlFor="description">Description: </label>
                <textarea type="text" name="description" id="description" placeholder="Description"
                    value={description} onChange={handleDescriptionChange}></textarea>
                <button type="submit">Add Experience</button>
            </form>
        );
    }

    function editExperienceForm() { //make conditional editExperience in addExperienceForm instead?
        return (
            <form onSubmit={e => { e.preventDefault(); editExperience() }}>
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                    value={companyName} onChange={handleCompanyNameChange} />

                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
                    value={positionTitle} onChange={handlePositionTitleChange} />

                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                    value={startDate} onChange={handleStartDateChange} />

                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                    value={endDate} onChange={handleEndDateChange} />

                <label htmlFor="description">Description: </label>
                <textarea type="text" name="description" id="description" placeholder="Description"
                    value={description} onChange={handleDescriptionChange}></textarea>
                <button type="submit">Save changes</button>
            </form>
        );
    }

    function addExperience() {
        setExperienceEntries([...experienceEntries, {
            companyName: companyName,
            positionTitle: positionTitle,
            startDate: startDate,
            endDate: endDate,
            description: description,
            id: (nextId)
        }]);
        setNextId(nextId + 1);
        clearForm();
    }

    //only runs when editExperienceForm() is called
    function editExperience() {
        const editedExperiences = experienceEntries.map(
            experience => {
                // if (experience.id != xp.id) {
                //compare to the experience id stored in state, rather than the function param
                if (experience.id != editExistingExperience.id) {
                    return experience;
                    //MAYBE I can get rid of duplicate editExperience/AddExperience
                    //if the id is not found in editExperience, just run addExperience?
                }
                else {
                    return {
                        ...experience,
                        companyName: companyName,
                        positionTitle: positionTitle,
                        startDate: startDate,
                        endDate: endDate,
                        description: description
                        //consider splitting this huge Practical experience function
                    }
                }
            }
        );
        setExperienceEntries(editedExperiences);
        setEditExistingExperience(null);
        clearForm();
    };

    function selectEditingExperience(experience) {
        setEditExistingExperience(experience);
        setCompanyName(experience.companyName);
        setPositionTitle(experience.positionTitle);
        setStartDate(experience.startDate);
        setEndDate(experience.endDate)
        setDescription(experience.description)
    }

    function clearForm() {
        setCompanyName('');
        setPositionTitle('');
        setStartDate('');
        setEndDate('');
        setDescription('');
    }


    return (
        <div className="add-experience-section">
            <div>Experience</div>
            {/* /* if currently editing in setState, show the form that edits the existing experience.
            else, show the regular form to input a new experience * */}
            {editExistingExperience ? editExperienceForm(editExistingExperience) : addExperienceForm()}
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
                {experienceEntries.map(experience => (
                    <button key={experience.id} onClick={() =>
                        //later add css highlight to the button we pressed, to show which experience we are editing
                        //should check if id of the experience.id key of the button is same as id in state editExistingExperience
                        //remove highlight if that state is null
                        selectEditingExperience(experience) //should not work, need to add function that does something alongside setEditExi...
                    }>Edit {experience.companyName}</button>
                ))}
            </ul>
        </div>
    )
}