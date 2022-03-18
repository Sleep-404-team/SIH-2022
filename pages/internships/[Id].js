import { Topbar, InternshipListings, Footer } from "../../components";
import Config from "../../utils/config";
import { useRouter } from "next/router";

export default function Internships({ internship }) {
  return (
    <>
      <Topbar />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { Id } = context.query;

  const resInternships = await fetch(`${Config.API_URL}/internship/${Id}`);
  const internship = await resInternships.json();
  return {
    props: {
      internship,
    },
  };
};
