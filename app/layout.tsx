import "/styles/globals.css";
import SideBar from "./sidebar";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="text-1.2">
        <SideBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
