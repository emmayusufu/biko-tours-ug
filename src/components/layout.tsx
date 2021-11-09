import * as React from "react";
import Footer from "../page-sections/footer/footer";
import { Helmet } from "react-helmet";

const Layout: React.FC<{ title: string; content: string }> = ({
  children,
  title,
  content,
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Biko Tours UG | {title}</title>
        <meta name="description" content={content} />
      </Helmet>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
