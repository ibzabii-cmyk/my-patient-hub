import Sidebar from "./pages/chat/Sidebar";
import TopHeader from "./pages/chat/TopHeader";
import ContactList from "./pages/chat/contactList";
import ChatWindow from "./pages/chat/chatWindow";

function App() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#405273]">
      <Sidebar />

      <div className="ml-0 min-h-screen lg:ml-[265px]">
        <TopHeader />

        <main className="px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center gap-3 px-2 pt-2">
            <span className="text-gray-400">⌂</span>
            <span className="text-gray-300">/</span>
            <span className="text-sm">Chat</span>
          </div>

          <h1 className="mb-4 px-2 text-lg font-semibold text-[#405273]">
            Chat
          </h1>

          <div className="grid min-h-[520px] grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(50,50,93,0.08)] lg:grid-cols-[370px_1fr]">
            <ContactList />
            <ChatWindow />
          </div>

          <footer className="flex flex-col justify-between gap-3 px-6 py-1 text-sm text-[#687994] sm:flex-row">
            <span>
              © 2026, made with <span className="text-red-400">♥</span> by
              MyPiHUB for a better web.
            </span>

            <div className="flex gap-7">
              <span>MyPatientHUB</span>
              <span>About Us</span>
              <span>Blog</span>
            </div>
          </footer>

          <div className="mt-8 hidden h-20 bg-white lg:block"></div>
        </main>
      </div>
    </div>
  );
}

export default App;