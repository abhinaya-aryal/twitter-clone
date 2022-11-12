"use client";
import Logo from "./logo";
import SideBarData from "../data/sidebardata";
import heebo from "../lib/fonts/heebo";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import TweetButton from "../ui/buttons/tweetbutton";

const SideBar = () => {
  const [activePath, setActivePath] = useState(null);
  const path = usePathname();
  if (path === "/" && activePath !== "/") {
    setActivePath("/");
  }

  return (
    <>
      <div className="h-screen w-38.4 float-left border-r border-gray-400</div> flex flex-col items-center">
        <div className={``}>
          <Logo />

          {SideBarData.map((item) => {
            return (
              <>
                <Link key={item.name} href={item.path}>
                  <div
                    key={item.name}
                    className={`${heebo.className} ${
                      activePath === item.path ? "font-semibold" : ""
                    } h-max w-max my-0.4 text-2.8 p-1 rounded-full cursor-pointer hover:bg-[rgb(231,231,232)] flex space-x-2`}
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
      </div>
    </>
  );
};

export default SideBar;
