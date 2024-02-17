import React, { useState, useEffect } from 'react';
import './App.css';

const initialFriends = [
  { name: 'Joel', avatar: 'data:image/jpeg;base64,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'},
  { name: 'Ellie', avatar: 'https://nguoinoitieng.tv/images/nnt/107/0/bj88.jpg' },
  { name: 'Charles', avatar: 'https://vcdn-vnexpress.vnecdn.net/2023/05/09/nypichpdpict000010811722-16836-8279-9106-1683603718.jpg' }
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(initialFriends[0]);
  const [friendMessages, setFriendMessages] = useState(() => {
    const storedMessages = localStorage.getItem('friendMessages');
    return storedMessages ? JSON.parse(storedMessages) : {
      Joel: [],
      Ellie: [],
      Charles: []
    };
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('friendMessages', JSON.stringify(friendMessages));
  }, [friendMessages]);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        timestamp: Date.now(),
        read: false
      };
      setFriendMessages({
        ...friendMessages,
        [selectedFriend.name]: [...friendMessages[selectedFriend.name], newMessage]
      });

      const updatedFriends = [selectedFriend, ...friends.filter(friend => friend.name !== selectedFriend.name)];
      setFriends(updatedFriends);

      setInputValue('');
    }
  };

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMessages = friendMessages[selectedFriend.name].filter(message => {
    if (filter === 'all') return true;
    if (filter === 'read') return message.read;
    if (filter === 'unread') return !message.read;
    return true;
  });

  return (
    <div className="chat-container">
      <div className="friend-list">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setFilter('read')} className={filter === 'read' ? 'active' : ''}>Read</button>
          <button onClick={() => setFilter('unread')} className={filter === 'unread' ? 'active' : ''}>Unread</button>
        </div>
        {filteredFriends.map((friend, index) => (
          <div
            key={index}
            className={`friend ${friend === selectedFriend ? 'active' : ''}`}
            onClick={() => handleFriendClick(friend)}
          >
            <img src={friend.avatar} alt={friend.name} className="avatar" />
            {friend.name}
          </div>
        ))}
      </div>
      <div className="chat-box">
        <div className="chat-list">
          {filteredMessages.map((message, index) => (
            <div key={index} className={`message ${message.read ? 'read' : 'unread'}`}>
              <p>{message.text}</p>
              <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;
