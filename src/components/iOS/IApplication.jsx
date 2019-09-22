import React from 'react';

const IApplication = () => {
    return (
        <div>
            <input type="password" />
            {/* Will not work in iPhone app */}
            <TextInput secureTextEntry="true" />
        </div>
    );
}

export default IApplication;
