import { Topbar, InternshipListings, Footer } from "../../components/Landing";
import Config from "../../utils/config";
import Navbar from "../../Components/Navbar/Navbar";

export default function Internships({ internships }) {
  return (
    <>
      <Navbar />
      {/* <Topbar /> */}
      <InternshipListings internships={internships} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const resInternships = await fetch(`${Config.API_URL}/internship`);
  const internships = await resInternships.json();
  return {
    props: {
      internships,
    },
  };
};
