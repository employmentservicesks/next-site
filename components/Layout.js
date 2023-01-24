import Footer from "./Footer";
import NavBar from "./NavBar";
import HeadComponent from "./HeadComponent";

const Layout = ({ children, title, description, icon }) => {
  return (
    <>
      <HeadComponent title={title} description={description} icon={icon} />
      <div className="min-h-screen flex flex-col pt-24">
        <NavBar />
        <div className="w-full bg-gray-100 dark:bg-gray-300  flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
