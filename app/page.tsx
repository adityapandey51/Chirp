import { FaBullhorn } from "react-icons/fa";
import {BiHomeCircle,BiHash,BiUser} from "react-icons/bi"
import {BsBell, BsEnvelope, BsBookmark} from "react-icons/bs"
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface SideBarButton {
  title: string;
  icon: React.ReactNode
}

const sideBarMenuItems:SideBarButton[]=[
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
]
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 px-56 h-screen w-screen">
        <div className="col-span-3 pt-2 ml-20">
          <div className="text-3xl h-fit w-fit cursor-pointer transition-all hover:bg-gray-800 rounded-full p-4">
            <FaBullhorn />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sideBarMenuItems.map((item) => {
                return (
                  <li
                    className="flex justify-start items-center gap-4 hover:bg-gray-800 w-fit rounded-full px-3 py-3 cursor-pointer mt-2"
                    key={item.title}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 pr-2">
              <button className="bg-yellow-600 font-bold p-4 rounded-full w-full">
                Chirp
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll no-scrollbar border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
