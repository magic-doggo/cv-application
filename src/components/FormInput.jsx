import { useState } from "react"

export default function FormInput () {
    const [fullName, setFullName] = useState('');

    function handleNameChange (e) {
        setFullName(e.target.value) 
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id="fullName" name="fullName" placeholder="full name"
                value = {fullName} onChange={handleNameChange}/>
            </form>
        </div>
    )
}