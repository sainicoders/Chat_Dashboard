import { TiHomeOutline } from "react-icons/ti";
import { BsChatDots } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
function Sidebar() {
  return (
    <>
      <div className="bg-[#6E00FF] h-full rounded-2xl flex flex-col items-center py-4 ">
        <div className="p-4">
          <div className="w-full flex items-center justify-center hover:bg-gray-100 rounded-lg transition duration-150">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              className="w-12 h-12 rounded-full object-cover"
              alt="girl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 flex-1 mt-10">
          <div className="size-10 flex items-center justify-center">
            <TiHomeOutline className="size-8 text-white" />
          </div>
          <div className="size-10 flex items-center justify-center">
            <BsChatDots className="size-8 text-white" />
          </div>
          <div className="size-10 flex items-center justify-center">
            <IoIosNotifications className="size-8 text-white" />
          </div>
          <div className="size-10 flex items-center justify-center">
            <MdOutlineSettings className="size-8 text-white" />
          </div>
          <div className="size-10 flex items-center justify-center">
            <RiContactsBook3Line className="size-8 text-white" />
          </div>
        </div>

        <div className="mb-3">
          <div className="size-10 flex items-center justify-center">
            <MdLogout className="size-8 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
