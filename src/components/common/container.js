import Header from "./header";
import Footer from "./footer";

export default function Container({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
