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

  const constraintsRef = useRef(null);

  return (
    <>
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[60]" />
      <motion.div 
        drag
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        className="fixed bottom-6 right-6 z-[60] pointer-events-none"
      >
        <div className="relative flex flex-col items-end">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto w-[calc(100vw-3rem)] sm:w-96 bg-cream shadow-2xl rounded-[32px] overflow-hidden mb-6 border border-navy/10 flex flex-col absolute bottom-full right-0"
                style={{ height: '520px', maxHeight: 'calc(100vh - 8rem)' }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="bg-primary text-cream p-5 flex justify-between items-center shrink-0 cursor-move">
                  <div className="flex items-center gap-3">
                    <div className="bg-cream/20 p-2 rounded-xl">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-sm tracking-wide">AI Assistant</h3>
                      <p className="text-[10px] text-cream/70 font-medium">Online • Response in seconds</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50 custom-scrollbar">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-3 ${msg.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center shadow-sm ${msg.isBot ? 'bg-primary/20 text-primary' : 'bg-secondary text-navy'}`}>
                        {msg.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className={`mt-1 max-w-[85%] px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                        msg.isBot 
                          ? 'bg-white text-navy rounded-2xl rounded-tl-sm border border-navy/5' 
                          : 'bg-primary text-cream rounded-2xl rounded-tr-sm'
                      } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}>
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 flex-row">
                      <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-primary/20 text-primary shadow-sm">
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
                <div className="p-4 border-t border-navy/10 bg-white">
                  <form onSubmit={handleSend} className="flex gap-2 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask anything about our hospital..."
                      className="w-full bg-gray-50 border border-navy/10 rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-navy transition-all"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-primary text-cream rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 ml-0.5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isOpen && messages.length <= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="pointer-events-auto bg-white text-navy text-[13px] font-bold py-3 px-5 rounded-2xl shadow-2xl mb-4 border border-navy/5 relative cursor-move whitespace-nowrap"
              >
                👋 Need help? Chat with me!
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-navy/5 transform rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`pointer-events-auto flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all z-50 group border-4 border-white cursor-move ${
              isOpen ? 'bg-accent text-white rotate-90' : 'bg-primary text-white hover:scale-110'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={30} />}
          </motion.button>
        </div>
      </motion.div>
    </>


  );
};

export default ChatWidget;
