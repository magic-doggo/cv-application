import { useState } from "react"

export default function PersonalDetailsForm({addPersonalDetailsEntry}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleNameChange(e) {
        setFullName(e.target.value);
        addPersonalDetailsEntry({
            fullName,
            email,
            phoneNumber
        })
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        addPersonalDetailsEntry({
            fullName,
            email,
            phoneNumber
        })
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
        addPersonalDetailsEntry({
            fullName,
            email,
            phoneNumber
        })
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
                {/* <button type="submit">Add Personal Details</button> */}
            </form>
        </div>
    )
}