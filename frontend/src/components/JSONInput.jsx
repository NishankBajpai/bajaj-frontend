import React from 'react';
import { useState } from 'react';
const JSONInput = ({ setResponseData }) => {
    const [inputData, setInputData] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(inputData);
            const response = await fetch('https://bajaj-backend-seven-mu.vercel.app/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parsedData)
            });
            const data = await response.json();
            setResponseData(data);
            setError("");
        } catch (err) {
            setError("Invalid JSON or server error");
        }
    };

    return (
        <div>
            <textarea 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter JSON here"
            />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default JSONInput;
