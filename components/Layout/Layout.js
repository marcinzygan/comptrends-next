import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
