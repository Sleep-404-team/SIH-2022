import { Topbar, InternshipListings, Footer } from "../../components";
import Config from "../../utils/config";

export default function Internships({ internships }) {
  return (
    <>
      <Topbar />
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
