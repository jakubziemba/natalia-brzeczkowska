import Nav from "./nav";
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="h-screen ">
      <Nav />
      <main className="h-full">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
