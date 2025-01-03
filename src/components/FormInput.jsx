import { useState } from "react"

export default function PersonalDetails () {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleNameChange (e) {
        setFullName(e.target.value); 
    }
    function handleEmailChange (e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id="fullName" name="fullName" placeholder="full name"
                value = {fullName} onChange={handleNameChange}/>

                <label htmlFor="email">Email: </label>
                <input type="email" id= "email" name="email" placeholder="voldemort@horcrux.com"
                value={email} onChange={handleEmailChange}/>

                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="0000 0000"
                value={phoneNumber} onChange={handlePhoneNumberChange}/>
            </form>
        </div>
    )
}

export function EducationalExperience () {
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
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="school">School name: </label>
                <input type="text" name="school" id="school" placeholder="Enter school / university"
                value={school} onChange={handleSchoolChange}/>

                <label htmlFor="degree">Degree: </label>
                <input type="text" name="degree" id="degree" placeholder="Enter degree / field of study"
                value={degree} onChange={handleDegreeChange}/>

                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                value={startDate} onChange={handleStartDateChange}/>

                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                value={endDate} onChange={handleEndDateChange}/>
            </form>
        </div>
    )
}

export function PracticalExperience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    
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

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="companyName">Company Name</label>
                <input type="text" name="companyName" id="companyName" placeholder="Enter Company Name"
                value ={companyName} onChange={handleCompanyNameChange}/>

                <label htmlFor="positionTitle">Company Name</label>
                <input type="text" name="positionTitle" id="positionTitle" placeholder="Enter Position Title"
                value ={positionTitle} onChange={handlePositionTitleChange}/>

                <label htmlFor="startDate">Start Date: </label>
                <input type="text" name="startDate" id="startDate" placeholder="Enter Start Date"
                value={startDate} onChange={handleStartDateChange}/>

                <label htmlFor="endDate">End Date: </label>
                <input type="text" name="endDate" id="endDate" placeholder="Enter End Date"
                value={endDate} onChange={handleEndDateChange}/>
            </form>
        </div>
    )
}