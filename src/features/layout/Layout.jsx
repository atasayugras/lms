import Header from "./Header.jsx";
import TitleSection from "./TitleSection.jsx";
import Footer from "./Footer.jsx";
import { useLocation } from "react-router-dom";

function Layout(props) {
  const { PageTitle, children } = props;
  const location = useLocation();
  console.log(children);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-8 pt-8">
        <TitleSection PageTitle={PageTitle} />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
