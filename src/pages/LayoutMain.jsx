import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";

function LayoutMain() {
  const contacts = [
    {
      id: 1,
      name: "Sarah Wilson",
      message: "Hey, how are you doing?",
      time: "2m ago",
      unreadCount: 4,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      id: 2,
      name: "John Doe",
      message: "Let's catch up later!",
      time: "5m ago",
      unreadCount: 2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      id: 3,
      name: "Emily Carter",
      message: "I'll call you back soon.",
      time: "10m ago",
      unreadCount: 1,
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    },
    {
      id: 3,
      name: "Emily Carter",
      message: "I'll call you back soon.",
      time: "10m ago",
      unreadCount: 1,
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    },
    {
      id: 3,
      name: "Emily Carter",
      message: "I'll call you back soon.",
      time: "10m ago",
      unreadCount: 1,
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    },
    {
      id: 3,
      name: "Emily Carter",
      message: "I'll call you back soon.",
      time: "10m ago",
      unreadCount: 1,
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    },
  ];

  return (
    <>
      <div className="h-screen w-full bg-[#EFF6FC]">
        <div className="flex gap-6 p-6 ">
          <div className="size-14 h-[93vh] flex w-[10%]">
            {" "}
            <Sidebar />
          </div>
          <div className="size-14 h-full w-[60%] grow-0">
            <div className="flex gap-4 flex-col">
              <div className="w-full ">
                <div className="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl pl-10 pr-3 py-2  duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow bg-white "
                    placeholder="search"
                  />
                </div>
              </div>
              <div className="h-full w-full bg-[#FFFFFF] rounded-2xl">
                <div className="h-full w-full p-6">
                  <aside className=" hidden md:flex md:flex-col">
                    <div className=" flex items-center justify-between px-3 ">
                      <h2 className="font-semibold text-xl text-gray-800">
                        Chats
                      </h2>
                    </div>
                    <div className="overflow-y-auto h-[30vh] no-scrollbar">
                      <div className=" space-y-1">
                        {contacts.map((contact) => (
                          <div
                            key={contact.id}
                            className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg transition duration-150 border-b border-gray-300"
                          >
                            <img
                              src={contact.image}
                              alt={contact.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />

                            <div className="ml-4 flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-gray-900">
                                  {contact.name}
                                </h3>
                                <span className="text-xs text-gray-500">
                                  {contact.time}
                                </span>
                              </div>

                              <div className="flex items-center justify-between mt-1">
                                <p className="text-sm text-gray-500 truncate flex-1">
                                  {contact.message}
                                </p>

                                {contact.unreadCount > 0 && (
                                  <div className="flex items-center justify-center text-xs text-white font-semibold rounded-full bg-red-500 h-5 w-5 ml-2">
                                    {contact.unreadCount}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="h-full w-full bg-[#FFFFFF] rounded-2xl">
                <div className="h-full w-full p-6">
                  <aside className=" hidden md:flex md:flex-col">
                    <div className=" flex items-center justify-between px-3 ">
                      <h2 className="font-semibold text-xl text-gray-800">
                        Group
                      </h2>
                    </div>
                    <div className="overflow-y-auto h-[31vh] no-scrollbar">
                      <div className=" space-y-1">
                        {contacts.map((contact) => (
                          <div
                            key={contact.id}
                            className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg transition duration-150 border-b border-gray-300"
                          >
                            <img
                              src={contact.image}
                              alt={contact.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />

                            <div className="ml-4 flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-gray-900">
                                  {contact.name}
                                </h3>
                                <span className="text-xs text-gray-500">
                                  {contact.time}
                                </span>
                              </div>

                              <div className="flex items-center justify-between mt-1">
                                <p className="text-sm text-gray-500 truncate flex-1">
                                  {contact.message}
                                </p>

                                {contact.unreadCount > 0 && (
                                  <div className="flex items-center justify-center text-xs text-white font-semibold rounded-full bg-red-500 h-5 w-5 ml-2">
                                    {contact.unreadCount}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[93vh] w-full rounded-2xl bg-[#FFFFFF] ">
            <ChatHeader />
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutMain;
