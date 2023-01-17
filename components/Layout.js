import Footer from "./Footer";
import NavBar from "./NavBar";
import HeadComponent from "./HeadComponent";

const Layout = ({ children, title, description, icon }) => {
  return (
    <>
      <HeadComponent title={title} description={description} icon={icon} />
      <div className="min-h-screen flex flex-col pt-24">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
