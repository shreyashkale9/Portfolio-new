import React, { useState, useRef, useEffect } from 'react';
import './VirtualShreyash.css';

interface Message {
  text: string;
  sender: 'ai' | 'user';
}

const VirtualShreyash: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Shreyash's AI assistant. Ask me anything about his experience, projects, or education!", sender: "ai" }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Starter questions to guide the user
  const suggestedQuestions = [
    "Where are you currently working?",
    "Tell me about your education.",
    "What is your tech stack?",
    "What are your top projects?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Modified to accept a string directly from the suggestion buttons
  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = { text: textToSend, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    if (!textOverride) setInput(""); // Only clear input if typed manually
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5001/ask-shreyash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend })
      });

      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.answer, sender: "ai" }]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages((prev) => [...prev, { text: "Oops, my server is taking a coffee break. Please try again later!", sender: "ai" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="virtual-shreyash-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="bot-avatar">🤖</span>
              <h4>Virtual Shreyash</h4>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            
            {/* Show suggestions ONLY if there is exactly 1 message (the intro) */}
            {messages.length === 1 && (
              <div className="suggestions-container">
                {suggestedQuestions.map((q, index) => (
                  <button 
                    key={index} 
                    className="suggestion-btn" 
                    onClick={() => handleSend(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="message ai typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me something..."
              disabled={isLoading}
            />
            <button onClick={() => handleSend()} disabled={isLoading || !input.trim()}>
              Send
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`chat-toggle-btn ${isOpen ? 'active' : ''}`}
        aria-label="Chat with Virtual Shreyash"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
};

export default VirtualShreyash;