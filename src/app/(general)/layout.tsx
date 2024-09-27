import Footer from "@/components/footer";
import Header from "@/components/header";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <article>{children}</article>
      <Footer />
    </>
  );
};

export default GeneralLayout;
