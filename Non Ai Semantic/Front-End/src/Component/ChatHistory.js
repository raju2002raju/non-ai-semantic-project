import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatHistory = ({ fileName }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(true);

const userEmail = localStorage.getItem('userEmail')
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/get-chat-history/${fileName}`,
          {

            headers: { 'Content-Type': 'application/json' },
            'X-User-Email': userEmail
          }
        );
        setChatHistory(response.data.chatHistory);
        console.log('chat',response.data)
        setLoading(false);
      } catch (err) {
      
        setLoading(false);
      }
    };

    fetchChatHistory();
  }, [fileName]);
  

  return (
    <div>
     
        <div>
          {chatHistory.map((chat, index) => (
            <div key={index} className='pdf-chat-history'>
               <div>
                <div className='chat-question'>{chat.question}</div>
                </div>
                <div>
                <div className='chat-answer'>{chat.answer}</div>
                </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ChatHistory;
