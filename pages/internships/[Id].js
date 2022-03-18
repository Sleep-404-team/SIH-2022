import { Topbar, InternshipPage, Footer } from "../../components/Landing";
import Config from "../../utils/config";
import Navbar from "../../Components/Navbar/Navbar";

export default function Internships({ internship }) {
  return (
    <>
      <Navbar />
      <InternshipPage internship={internship} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { Id } = context.query;

  const resInternship = await fetch(`${Config.API_URL}/internship/${Id}`);
  const internship = await resInternship.json();
  return {
    props: {
      internship,
    },
  };
};
