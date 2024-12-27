/* eslint-disable react/prop-types */
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import TitleSection from "./TitleSection.jsx";
import Footer from "./Footer.jsx";

function Layout(props) {
  const { children, pageTitle } = props;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow pl-[60px] pt-[56px]">
          <div className="px-8 pt-8">
            <TitleSection pageTitle={pageTitle} />
          </div>
          <div className="w-full">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
