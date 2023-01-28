import React, { useState } from 'react';

function UserForm() {
    const [username, setUsername] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
      
        // Get the current date and time
        const startTime = new Date();
      
        fetch('/users', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            startTime: startTime,
            endTime: null,
            points: null
          })
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
}

export default UserForm;