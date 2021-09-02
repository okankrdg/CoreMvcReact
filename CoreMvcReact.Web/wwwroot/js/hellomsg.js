import React, { useState } from 'react';
const MessageTest = () => {
    const [message, setmessage] = useState("")
    return (
        <div>
            <h3>Message: {message}</h3>
      Enter message: <input type="text" value={message} onChange={(e) => setmessage(e.currentTarget.value)} />
        </div>
    )
}
export default MessageTest;