import { IoCallSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoMdCamera } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
function chatHeader() {
  return (
    <>
      <main className="flex-1 flex flex-col h-full w-full rounded-2xl">
        <header className="h-16  border-b border-gray-200 flex items-center px-6 justify-between">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John Doe"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="font-semibold text-gray-900">John Doe</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className=" flex gap-6">
            <div>
              <IoCallSharp className="text-[#9747FF] size-5" />
            </div>
            <div>
              <FaVideo className="text-[#9747FF] size-5" />
            </div>
            <div>
              <BsThreeDotsVertical className="text-[#9747FF] size-5" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          <div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div>
          {/* try */}
          <div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div><div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div><div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div><div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div><div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div><div className="flex items-start">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="John"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className=" rounded-full p-2 shadow-sm bg-[#E7E7E7] max-w-md">
                <p className="text-gray-800">Hey! your day going?</p>
              </div>
              <span className="flex gap-4">
                <span className="h-3 w-3 rounded-full bg-[#E7E7E7]"></span>
                <span className="text-xs text-gray-500 mt-1 block">
                  10:23 AM
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="mr-4">
              <div className="bg-[#6E00FF] rounded-full p-2 shadow-sm max-w-md">
                <p className="text-white">
                  Pretty good! Just working on some new projects.
                </p>
              </div>

              <span className="text-xs text-gray-500 mt-1  text-right flex justify-end items-center">
                10:24 AM
                <GoDotFill className="ml-2 h-6 w-6 text-[#6E00FF]" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full p-4">
          <div className="flex flex-1 border rounded-full border-gray-200 bg-[#EFF6FCDE] px-4 py-2 mx-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <GrAttachment />
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none px-2"
              aria-label="Message input"
            />

            <div className="flex gap-3">
              <MdOutlineEmojiEmotions className="size-6 cursor-pointer text-gray-600 hover:text-gray-800" />
              <IoMdCamera className="size-6 cursor-pointer text-gray-600 hover:text-gray-800" />
            </div>
          </div>

          <div className="bg-[#6E00FF] h-12 w-12 flex items-center justify-center rounded-xl shadow-md cursor-pointer hover:bg-[#5a00cc] transition">
            <FaMicrophone className="size-6 text-white" />
          </div>
        </div>
      </main>
    </>
  );
}

export default chatHeader;
