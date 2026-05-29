import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "motion/react";
import { Header, Footer } from "../components/common";
import SkipLink from "../components/common/SkipLink";

const MainLayout = () => {
  const { pathname } = useLocation();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="layout">
        <SkipLink />
        <Header />
        <main id="main-content" className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default MainLayout;
