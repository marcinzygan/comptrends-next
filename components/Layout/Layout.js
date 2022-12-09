import Navbar from "../Navbar/Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="">{props.children}</main>
    </>
  );
}

export default Layout;
