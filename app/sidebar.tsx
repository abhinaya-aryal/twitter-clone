"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import SideBarData from "../data/sidebardata";
import Logo from "./logo";
import Profile from "./profile";
import TweetButton from "./tweetbutton";

const SideBar = () => {
  const [activePath, setActivePath] = useState("");
  const path = usePathname();
  if (path === "/" && activePath !== "/") setActivePath("/");

  return (
    <>
      <div className="h-screen w-36 float-left border-r flex items-end flex-col">
        <div className={`h-full w-max justify-between mr-2 flex flex-col`}>
          <div className={`h-max`}>
            <Logo />
            {/* relocate the jsx below and call a single component passing props */}
            {SideBarData.map((item) => {
              return (
                <>
                  <Link
                    key={item.name}
                    href={item.path}
                  >
                    <div
                      key={item.name}
                      className={`${
                        activePath === item.path ? "font-semibold" : ""
                      } h-max w-max my-0.2 text-2.8 pl-1 py-1.2 pr-2 rounded-full cursor-pointer hover:bg-[rgb(231,231,232)] flex space-x-2`}
                    >
                      {item.icon}
                      <div className={`text-2`}>{item.name}</div>
                    </div>
                  </Link>
                </>
              );
            })}
            <TweetButton />
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default SideBar;
