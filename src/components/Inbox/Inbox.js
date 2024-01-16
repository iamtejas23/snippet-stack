import React from 'react';
import './inbox.css';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    subject: 'Meeting Tomorrow',
    body: 'Hi, let\'s meet tomorrow at 10 AM.',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    subject: 'Project Update',
    body: 'The project is progressing well. Here\'s the latest update.',
    timestamp: '5 hours ago',
  },
  // Add more messages as needed
];

function App() {
  return (
    <div className="app">
      <div className="inbox">
        <h1>Inbox</h1>
        <div className="message-list">
          {messages.map(message => (
            <div key={message.id} className="message">
              <div className="message-sender">{message.sender}</div>
              <div className="message-subject">{message.subject}</div>
              <div className="message-body">{message.body}</div>
              <div className="message-timestamp">{message.timestamp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
