"use client";

import { useState } from "react";

export default function LSHSLiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "agent", text: "Hello! Welcome to London School of Higher Studies (LSHS). How can I assist you with CIPS qualifications or admissions today?" },
  ]);
  const [userText, setUserText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userText.trim()) return;

    const newMsgs = [...chatMessages, { sender: "user", text: userText }];
    setChatMessages(newMsgs);
    setUserText("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: "Thank you for reaching out! An LSHS student advisor has received your query. You can also chat directly on WhatsApp at +44 7515 106586 or +880 1906 896326.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white border border-sky-900/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-96 transition-all duration-300">
          {/* Header */}
          <div className="bg-[#0c4a6e] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f4d210] text-slate-950 font-bold flex items-center justify-center text-xs">
                LSHS
              </div>
              <div>
                <h4 className="text-xs font-bold font-serif">LSHS Student Live Support</h4>
                <span className="text-[10px] text-sky-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Admissions Officer Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sky-200 hover:text-white text-lg font-bold p-1"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-sky-50/40 text-xs">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#0c4a6e] text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-sky-900/10 shadow-sm rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Form Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Ask a question about CIPS or fees..."
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0b73b9]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#0c4a6e] text-white text-xs font-bold rounded-xl hover:bg-[#0b73b9] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-3.5 rounded-full bg-[#0c4a6e] hover:bg-[#0b73b9] text-[#f4d210] font-bold text-xs shadow-2xl flex items-center gap-2 transition-all hover:scale-105 border-2 border-[#f4d210]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>💬 Live Student Chat</span>
        </button>
      )}
    </div>
  );
}
