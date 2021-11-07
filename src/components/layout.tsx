import * as React from "react";
import Footer from "../page-sections/footer/footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
