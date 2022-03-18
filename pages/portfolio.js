import { Topbar, Footer } from "../components/Landing";
import { Portfolio, PortfolioHero } from "../components/Portfolio";

const portfolio = () => {
  return (
    <>
      <Topbar />
      <PortfolioHero />
      <Portfolio />
      <Footer />
    </>
  );
};

export default portfolio;
