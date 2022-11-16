import { RiHome7Fill } from "react-icons/ri";
import { BiHash, BiBookmark } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { CgProfile, CgMoreO } from "react-icons/cg";

const SideBarData = [
  {
    id: 1,
    name: "Home",
    icon: <RiHome7Fill />,
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    icon: <BiHash />,
    path: "/explore",
  },
  {
    id: 3,
    name: "Notifications",
    icon: <MdOutlineNotificationsNone />,
    path: "/notifications",
  },
  {
    id: 4,
    icon: <FaRegEnvelope />,
    name: "Messages",
    path: "/messages",
  },
  {
    id: 5,
    name: "Bookmarks",
    icon: <BiBookmark />,
    path: "/bookmarks",
  },
  {
    id: 6,
    name: "List",
    icon: <HiOutlineDocumentText />,
    path: "/list",
  },
  {
    id: 7,
    name: "Profile",
    icon: <CgProfile />,
    path: "/profile",
  },
  {
    id: 8,
    name: "More",
    icon: <CgMoreO />,
    path: "/more",
  },
];

export default SideBarData;
