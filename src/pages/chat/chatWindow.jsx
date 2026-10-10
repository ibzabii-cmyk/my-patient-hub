import { useState } from "react";

import {
  Video,
  Phone,
  MoreVertical,
  Smile,
  Send,
  Mic,
  Image as ImageIcon,
} from "lucide-react";

const messages = [
  {
    id: 1,
    name: "noman khan",
    text: "Hi hope you feel better",
    time: "2:30",
    image: "	https://mypihub.web.app/static/media/doctor-avatar.cd9829645211560df46b.jpg",
  },
  {
    id: 2,
    name: "noman khan",
    text: "Hi hope you feel better",
    time: "2:30",
    image: "	https://mypihub.web.app/static/media/doctor-avatar.cd9829645211560df46b.jpg",
  },
  {
    id: 3,
    name: "noman khan",
    text: "Hi hope you feel better",
    time: "2:30",
    image: "	https://mypihub.web.app/static/media/doctor-avatar.cd9829645211560df46b.jpg",
  },
];

function ChatWindow() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: "You",
      text: message,
      time: "Now",
      image: "	https://mypihub.web.app/static/media/doctor-avatar.cd9829645211560df46b.jpg",
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section className="flex min-h-[520px] flex-col bg-white">
      {/* Chat Header */}
      <div className="flex h-[65px] items-center justify-between rounded-b-xl bg-white px-5 shadow-[0_4px_15px_rgba(50,50,93,0.08)]">
        <div className="flex items-center gap-3">
          <img
            src="https://mypihub.web.app/static/media/doctor-avatar.cd9829645211560df46b.jpg"
            alt="ahmadi khan"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>
            <h2 className="text-sm font-bold text-[#405273]">
              ahmadi khan
            </h2>

            <p className="text-xs text-[#7d8aa1]">
              online
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-[#d600a1]">
          <button>
            <Video size={20} strokeWidth={2.5} />
          </button>

          <button>
            <Phone size={20} strokeWidth={2.5} />
          </button>

          <button className="text-gray-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="space-y-5">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-start gap-3"
            >
              <img
                src={msg.image}
                alt={msg.name}
                className="h-9 w-9 rounded-full object-cover"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#333333]">
                    {msg.name}
                  </span>

                  <span className="text-xs text-[#333333]">
                    {msg.time}
                  </span>
                </div>

                <p className="mt-2 text-base text-[#777777]">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-50 p-4">
        <div className="flex items-center gap-3 rounded-xl border border-[#e6e9ee] px-3 py-1">
          <button className="text-gray-500">
            <Smile size={21} />
          </button>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Enter Message"
            className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-[#a6afbf]"
          />

          <button
            onClick={sendMessage}
            className="text-[#d600a1] transition hover:scale-110"
          >
            <Send size={22} fill="currentColor" />
          </button>

          <button className="text-[#d600a1]">
            <Mic size={20} />
          </button>

          <button className="text-gray-500">
            <ImageIcon size={21} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatWindow;