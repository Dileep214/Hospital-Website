import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your friendly hospital assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://chatbot-helper-1.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      
      if (data.success && data.data) {
        setMessages(prev => [...prev, { text: data.data.response, isBot: true }]);
        
        // Handle redirection for app download or appointments
        if (data.data.shouldRedirect && data.data.redirectUrl) {
          setTimeout(() => {
            window.open(data.data.redirectUrl, '_blank');
          }, 2000); // 2 second delay so the user can read the bot's message first
        }
      } else {
        throw new Error(data.message || 'Failed to get a response');
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, { 
        text: "I'm sorry, I'm having trouble connecting to my system right now. Please try again later or contact the hospital directly.", 
        isBot: true, 
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto w-[calc(100vw-3rem)] sm:w-96 bg-cream shadow-2xl rounded-2xl overflow-hidden mb-4 border border-navy/10 flex flex-col"
            style={{ height: '520px', maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-primary text-cream p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-cream/20 p-1.5 rounded-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-sm">AI Assistant</h3>
                  <p className="text-[10px] text-cream/80 leading-tight">Shankar Children's Hospital</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-cream/80 hover:text-cream hover:bg-cream/10 rounded-lg transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 relative">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2 ${msg.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.isBot ? 'bg-primary/20 text-primary' : 'bg-secondary text-navy'}`}>
                    {msg.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`mt-1 max-w-[80%] px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                    msg.isBot 
                      ? 'bg-white text-navy rounded-2xl rounded-tl-sm border border-navy/5' 
                      : 'bg-primary text-cream rounded-2xl rounded-tr-sm'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 flex-row">
                  <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-primary/20 text-primary">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="mt-1 px-4 py-3 bg-white text-navy rounded-2xl rounded-tl-sm border border-navy/5 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-navy/10 bg-white shrink-0">
              <form onSubmit={handleSend} className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-gray-50 border border-navy/10 rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-navy transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1 top-1 bottom-1 aspect-square bg-primary text-cream rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:hover:bg-primary"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {/* Tooltip hint above the button for the first time */}
      <AnimatePresence>
        {!isOpen && messages.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="pointer-events-auto bg-white text-navy text-xs font-medium py-2 px-3 rounded-xl shadow-lg mb-3 border border-navy/10 relative"
          >
            Need help? Chat with me!
            <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-b border-r border-navy/10 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto flex items-center justify-center p-4 rounded-full shadow-xl transition-all z-50 group hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-accent text-white' : 'bg-primary text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat window"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
