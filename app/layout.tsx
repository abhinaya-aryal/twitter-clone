import "/styles/globals.css";
import SideBar from "./sidebar";
import heebo from "../funcs/heebo";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${heebo.className} text-1.6 `}>
        <SideBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
