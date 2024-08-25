import React, { useState } from 'react';

const ResponseDisplay = ({ responseData }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelection = (e) => {
        const value = e.target.value;
        setSelectedOptions(prev => 
            prev.includes(value) ? prev.filter(opt => opt !== value) : [...prev, value]
        );
    };

    const filteredData = selectedOptions.reduce((acc, option) => {
        acc[option] = responseData[option];
        return acc;
    }, {});

    return (
        <div>
            <select multiple onChange={handleSelection}>
                <option value="numbers">Numbers</option>
                <option value="alphabets">Alphabets</option>
                <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
            </select>
            <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        </div>
    );
};

export default ResponseDisplay;
