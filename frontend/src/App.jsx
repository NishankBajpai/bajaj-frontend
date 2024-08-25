import React, { useState } from 'react';
import JSONInput from './components/JSONInput';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
    const [responseData, setResponseData] = useState(null);

    return (
        <div>
            <h1>ABCD123</h1>
            <JSONInput setResponseData={setResponseData} />
            {responseData && <ResponseDisplay responseData={responseData} />}
        </div>
    );
}

export default App;
