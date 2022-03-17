import { Topbar, InternshipListings, Footer } from "../../components";

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
  const resInternships = await fetch(
    "https://sw-f03-api.vercel.app/api/v1/internship"
  );
  const internships = await resInternships.json();
  return {
    props: {
      internships,
    },
  };
};
