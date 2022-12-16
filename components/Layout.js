import Footer from "./Footer";
import NavBar from "./NavBar";
import HeadComponent from "./HeadComponent";

const Layout = ({ children }) => {
  return (
    <>
      <HeadComponent />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
