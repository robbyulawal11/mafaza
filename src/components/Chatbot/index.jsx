import { useState, useRef } from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import logo from "../../assets/images/logo.png";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [initialMessage, setInitialMessage] = useState(
    "Halo! Saya Mafaza AI. Saya siap menjawab pertanyaan Anda terkait Mafaza, cidera olahraga, atau dunia terapi. Silakan bertanya! 😊"
  );
  const textareaRef = useRef(null);
  const maxHeight = 150;
  const minHeight = 40;

  const genAI = new GoogleGenerativeAI("AIzaSyBwkdh57r4ZFaMwWBVttv9j_horqDy2h_A");
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    if (initialMessage) {
      setInitialMessage("");
    }

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    autoResize(true);

    const result = await model.generateContent(
      `You'll be given a messages from user, and your job is answer the messages.
      ${input}`
    );
    const assistant_messages = result.response.candidates[0].content.parts[0].text;
    
    console.log(assistant_messages);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: assistant_messages, sender: "bot" },
      ]);
    }, 1000);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const autoResize = (reset = false) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    if (reset) {
      textarea.style.height = `${minHeight}px`;
      textarea.style.overflowY = "hidden";
    } else {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
    }
  };

  return (
    <div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="fixed bottom-20 right-3 bg-[#0F97B5] text-white p-4 rounded-full shadow-lg cursor-pointer 
                        transition-transform duration-200 hover:scale-110 hover:shadow-xl"
              onClick={toggleChat}
            >
              <FaCommentDots size={24} />
            </div>
          </TooltipTrigger>
          <TooltipContent 
            side="left" 
            sideOffset={8} 
            className="bg-[#0F97B5] text-white px-4 py-2 rounded-md text-base shadow-lg"
          >
            Mafaza AI
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {isOpen && (
        <div className="fixed bottom-20 right-3 w-[512px] bg-white shadow-lg rounded-[15px] overflow-hidden z-50">
          <div className="bg-[#0F97B5] text-white p-3 flex justify-between items-center shadow-md border-b border-[#0D8CA1]">
            <span className="flex font-semibold text-lg">              
              <img className="w-[30px] h-[30px] mr-3" src={logo} alt="logo" />
              Mafaza AI
            </span>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 transition duration-200"
            >
              <X size={22} />
            </button>
          </div>

          <div className="h-80 p-3 overflow-y-auto">
          {initialMessage && (
              <div className="p-2 my-2 rounded-[15px] bg-gray-200 text-black mr-auto w-fit">
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                  {initialMessage}
                </ReactMarkdown>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-[15px] ${
                  msg.sender === "user"
                    ? "bg-[#0F97B5] text-white ml-auto w-fit"
                    : "bg-gray-200 text-black mr-auto w-fit"
                }`}
              >
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                  {msg.text}
                </ReactMarkdown>
              </div>
            ))}
          </div>

          <div className="flex items-end p-2 border-t">
            <div className="flex-1 flex items-end">
              <textarea
                ref={textareaRef}
                className="w-full border p-2 rounded-[15px] resize-none overflow-auto focus:outline-none focus:ring-2 focus:ring-[#0F97B5] focus:border-[#0F97B5]"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  autoResize();
                }}
                onKeyDown={handleKeyDown}
                placeholder="Ketik pesan..."
                rows="1"
                style={{
                  minHeight: `${minHeight}px`,
                  maxHeight: `${maxHeight}px`,
                  overflowY: "hidden",
                }}
              />
            </div>
            <button
              className="bg-[#0F97B5] text-white p-2 ml-2 rounded-full flex items-center justify-center w-10 h-10"
              onClick={sendMessage}
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
