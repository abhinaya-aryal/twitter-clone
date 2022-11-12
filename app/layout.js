import "/styles/globals.css";
import SideBar from "./sidebar";

// % This is the root layout of our app and file should be named as layout.js. It can persist its state with every route.
// % Layout should always receive children props and should be rendered.
// % Root layout also needs html and body tag. For head, we can explicitly use head.js file.
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-1.6">
        <SideBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
