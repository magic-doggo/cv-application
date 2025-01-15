import { useState } from "react"

export default function PersonalDetails() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleNameChange(e) {
        setFullName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    return (
        <div className="add-personal-details-section">
            <div>Personal Details</div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id="fullName" name="fullName" placeholder="full name"
                    value={fullName} onChange={handleNameChange} />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="voldemort@horcrux.com"
                    value={email} onChange={handleEmailChange} />

                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="0000 0000"
                    value={phoneNumber} onChange={handlePhoneNumberChange} />
            </form>
        </div>
    )
}

export function EducationalExperience() {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }
    function handleDegreeChange(e) {
        setDegree(e.target.value);
    }
    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }
    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    return (
        <div className="add-education-section">
            <div>Education</div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="school">School name: </label>
                <input type="text" name="school" id="school" placeholder="Enter school / university"
                    value={school} onChange={handleSchoolChange} />

                <label htmlFor="degree">Degree: </label>
                <input type="text" name="degree" id="degree" placeholder="Enter degree / field of study"
                    value={degree} onChange={handleDegreeChange} />

                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                    value={startDate} onChange={handleStartDateChange} />

                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                    value={endDate} onChange={handleEndDateChange} />
            </form>
        </div>
    )
}

// export function PracticalExperience() {
//     const [companyName, setCompanyName] = useState('');
//     const [positionTitle, setPositionTitle] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [description, setDescription] = useState('');

// function handleCompanyNameChange(e) {
//     setCompanyName(e.target.value)
// }
// function handlePositionTitleChange(e) {
//     setPositionTitle(e.target.value)
// }
// function handleStartDateChange(e) {
//     setStartDate(e.target.value);
// }
// function handleEndDateChange(e) {
//     setEndDate(e.target.value);
// }
// function handleDescriptionChange(e) {
//     setDescription(e.target.value);
// }

//     return (
//         <div className="add-experience-section">
//             <div>Experience</div>
//             <form onSubmit={e => e.preventDefault()}>
//                 <label htmlFor="companyName">Company Name: </label>
//                 <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
//                 value ={companyName} onChange={handleCompanyNameChange}/>

//                 <label htmlFor="positionTitle">Position Title: </label>
//                 <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
//                 value ={positionTitle} onChange={handlePositionTitleChange}/>

//                 <label htmlFor="startDate">Start Date: </label>
//                 <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
//                 value={startDate} onChange={handleStartDateChange}/>

//                 <label htmlFor="endDate">End Date: </label>
//                 <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
//                 value={endDate} onChange={handleEndDateChange}/>

//                 <label htmlFor="description">Description: </label>
//                 <textarea type="text" name="description" id="description" placeholder="Description"
//                 value={description} onChange={handleDescriptionChange}></textarea>
//             </form>
//         </div>
//     )
// }

// export default function List() {
//     const listItems = people.map(person =>
//       <li key={person.id}>
//         <img
//           src={getImageUrl(person)}
//           alt={person.name}
//         />
//         <p>
//           <b>{person.name}</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//         </p>
//       </li>
//     );
//     return <ul>{listItems}</ul>;
//   }

// export const people = [{
//     id: 0, // Used in JSX as a key
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A'
//   }, {
//     id: 1, // Used in JSX as a key
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa'
//   }]

const experienceEntries = [{
    companyName: "gs",
    positionTitle: "pm",
    startDate: "last week",
    endDate: "yesterday",
    description: "asd",
},
{
    companyName: "gs2",
    positionTitle: "pm",
    startDate: "last week",
    endDate: "yesterday",
    description: "asd",
}]

export function PracticalExperience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

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

    let x = 0;

    function addExperience() {
        experienceEntries.push({
            companyName: companyName,
            positionTitle: positionTitle,
            startDate: startDate,
            endDate: endDate,
            description: description,
            id: (x++)
        })
    }

    const listExperience = experienceEntries.map(experience => {
        return (<form action={addExperience} onSubmit={e => e.preventDefault()}>
            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                value={experience.companyName} onChange={handleCompanyNameChange} key={x} />

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
        </form>)

    })


    return (<div>
        <div>Experience: </div>
        {listExperience}
    </div>)
}



//practical experience() should submit form values, and add them to the experience list as an object. 
//another function should take the values from the list and render separate children under the Experience tab for each job entry
//(extra: hide entry button to only show job name, instead of showing editable form)