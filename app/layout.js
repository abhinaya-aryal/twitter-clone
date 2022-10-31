import NavData from "../data/navdata";
import "/styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="flex bg-blue-500 justify-around text-white py-0.6">
          {NavData.map((item, index) => {
            return (
              <h1 className="text-2.4 cursor-pointer" key={index}>
                {item.name}
              </h1>
            );
          })}
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
