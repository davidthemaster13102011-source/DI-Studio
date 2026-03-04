import React, { useState } from 'react';

const LeadsForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Handle form submission 
        console.log('Leads information submitted:', { name, email, message });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LeadsForm;