import { Topbar, InternshipPage, Footer } from "../../components";
import Config from "../../utils/config";

export default function Internships({ internship }) {
  return (
    <>
      <Topbar />
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
