// import React, { useState } from 'react';
// import './StudentNewUser.css';

// const StudentNewUser = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [contact, setContact] = useState('');
//     const [gender, setGender] = useState(''); // Default empty
//     const [dob, setDob] = useState('');
//     const [address, setAddress] = useState('');
//     const [qualification, setQualification] = useState('');
//     const [interests, setInterests] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission logic here
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Confirm Password:', confirmPassword);
//         console.log('Contact:', contact);
//         console.log('Gender:', gender);
//         console.log('Date of Birth:', dob);
//         console.log('Address:', address);
//         console.log('Qualification:', qualification);
//         console.log('Interests:', interests);
//     };

//     return (
//         <div className="form-container">
//             <h1>Student Registration</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="confirmPassword">Confirm Password:</label>
//                 <input
//                     type="password"
//                     id="confirmPassword"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="contact">Contact Number:</label>
//                 <input
//                     type="tel"
//                     id="contact"
//                     value={contact}
//                     onChange={(e) => setContact(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="gender">Gender:</label>
//                 <select
//                     id="gender"
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     required
//                 >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                 </select>

//                 <label htmlFor="dob">Date of Birth:</label>
//                 <input
//                     type="date"
//                     id="dob"
//                     value={dob}
//                     onChange={(e) => setDob(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="address">Address:</label>
//                 <textarea
//                     id="address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="qualification">Qualification:</label>
//                 <input
//                     type="text"
//                     id="qualification"
//                     value={qualification}
//                     onChange={(e) => setQualification(e.target.value)}
//                     required
//                 />

//                 <label htmlFor="interests">Interests to Study:</label>
//                 <textarea
//                     id="interests"
//                     value={interests}
//                     onChange={(e) => setInterests(e.target.value)}
//                     required
//                 />

//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// export default StudentNewUser;
import React, { useState } from 'react';
import './StudentNewUser.css';

const StudentNewUser = () => {
    // Form field states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [interests, setInterests] = useState('');

    // Step state
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Contact:', contact);
        console.log('Gender:', gender);
        console.log('Date of Birth:', dob);
        console.log('Address:', address);
        console.log('Qualification:', qualification);
        console.log('Interests:', interests);
    };

    return (
        <div className="form-container">
            <h1>Student Registration</h1>
            <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                    <>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        
                        <button type="button" onClick={handleNext}>Next</button>
                    </>
                )}

                {/* Step 2: Additional Information */}
                {step === 2 && (
                    <>
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />

                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />

                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />

                        <button type="button" onClick={handlePrevious}>Previous</button>
                        <button type="button" onClick={handleNext}>Next</button>
                    </>
                )}

                {/* Step 3: Final Information */}
                {step === 3 && (
                    <>
                        <label htmlFor="qualification">Qualification:</label>
                        <input
                            type="text"
                            id="qualification"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            required
                        />

                        <label htmlFor="interests">Interests to Study:</label>
                        <textarea
                            id="interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            required
                        />

                        <button type="button" onClick={handlePrevious}>Previous</button>
                        <button type="submit">Register</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default StudentNewUser;
