import React, { useState, useRef, useEffect } from 'react';

const responses = {
  skill: "Gnanaprabhakar specialises in <b>Core Java/J2EE, Spring Boot, Micro Services, Kafka, Cassandra, Redis, Couchbase, and Oracle Coherence</b>. On the AI side, he has hands-on experience with <b>LLM integration, RAG pipelines, MCP servers, and Claude connectors</b>. He's also an Oracle Certified Professional Java SE 6 Programmer.",
  project: "His AI projects include <b>Data Trust Identifier</b> (intelligent data trustworthiness scoring), <b>AI Resume & Role Matcher</b> (RAG-based candidate-job matching), and <b>Bill Shield System</b> (automated bill verification using MCP servers and Claude connectors). All built as part of the 100X Engineer AI Architect certification.",
  current: "Gnanaprabhakar is currently a <b>Principal Engineer at Amadeus Software Labs India</b> (since Jan 2022). He works as Design and Solution Lead for the hospitality domain, building enterprise-grade Java applications with Couchbase, Spring Boot, Azure, and queue-based architectures.",
  history: "He has worked at <b>Amadeus Software Labs</b> (Principal Engineer, 2022–Present), <b>Publicis Sapient</b> (Manager Technology, 2014–2021), and <b>TCS</b> (Systems Engineer, 2011–2014). 14+ years across Hospitality, Telecom, and E-Commerce domains.",
  ai: "He completed the <b>100X Engineer Certified AI Architect</b> program (Cohort-6). He designed AI-powered solutions integrating LLMs, built chatbots, implemented RAG systems, developed MCP servers, and integrated Claude connectors for enterprise AI use cases.",
  default: "Great question! For detailed answers, reach out via email at <b>gnanaprabhakar.msc@gmail.com</b> or use the contact form. He'd be happy to connect!"
};

const getReply = (msg) => {
  const m = msg.toLowerCase();
  if (m.includes('skill') || m.includes('tech') || m.includes('stack') || m.includes('java')) return responses.skill;
  if (m.includes('project') || m.includes('built') || m.includes('ai project') || m.includes('poc')) return responses.project;
  if (m.includes('current') || m.includes('now') || m.includes('role') || m.includes('amadeus')) return responses.current;
  if (m.includes('compan') || m.includes('experienc') || m.includes('history') || m.includes('work')) return responses.history;
  if (m.includes('ai') || m.includes('certif') || m.includes('100x') || m.includes('llm') || m.includes('architect')) return responses.ai;
  return responses.default;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! 👋 I'm Gnanaprabhakar's AI assistant. I can answer questions about his experience, AI projects, and skills. What would you like to know?", time: 'Just now' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const addMsg = (text, role) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { text, role, time }]);
  };

  const sendMsg = (text) => {
    if (!text.trim()) return;
    addMsg(text, 'user');
    setInputValue('');
    setShowQuickReplies(false);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMsg(getReply(text), 'bot');
    }, 900 + Math.random() * 600);
  };

  const handleSend = () => sendMsg(inputValue);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div id="chat-widget">
      <div className={`chat-window ${!isOpen ? 'hidden' : ''}`} id="chatWindow">
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-avatar">🤖</div>
            <div>
              <div className="chat-name">Gnanaprabhakar's AI Assistant</div>
              <div className="chat-status"><div className="status-dot"></div> Online</div>
            </div>
          </div>
          <button className="chat-close" onClick={toggleChat}>&times;</button>
        </div>

        <div className="chat-messages" id="chatMessages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg ${msg.role}`}>
              <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: msg.text }}></div>
              <div className="msg-time">{msg.time}</div>
            </div>
          ))}
          {isTyping && (
            <div className="msg bot" id="typing">
              <div className="msg-bubble" style={{ padding: 0 }}>
                <div className="typing-indicator"><span></span><span></span><span></span></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showQuickReplies && (
          <div className="quick-replies" id="quickReplies">
            <button className="qr" onClick={() => sendMsg("What are his key skills?")}>Key skills</button>
            <button className="qr" onClick={() => sendMsg("Tell me about AI projects")}>AI projects</button>
            <button className="qr" onClick={() => sendMsg("What is his current role?")}>Current role</button>
            <button className="qr" onClick={() => sendMsg("Where has he worked?")}>Work history</button>
          </div>
        )}

        <div className="chat-input-wrap">
          <input
            id="chatInput"
            type="text"
            placeholder="Ask me anything…"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="chat-send" onClick={handleSend}>&gt;</button>
        </div>
      </div>

      <button className="chat-toggle" onClick={toggleChat}>
        {isOpen ? '✕' : '🤖'}
        {!isOpen && <span className="chat-badge">1</span>}
      </button>
    </div>
  );
};

export default ChatWidget;
