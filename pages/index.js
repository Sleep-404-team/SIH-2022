import {
  Topbar,
  Hero,
  FeaturedInternships,
  FAQs,
  Footer,
} from "../components/Landing";

export default function Home({ featuredInternships }) {
  return (
    <>
      <Topbar />
      <div className="mx-auto my-5 flex flex-col w-3/4">
        <Hero />
        <FeaturedInternships featuredInternships={featuredInternships} />
        <FAQs />
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://sw-f03-api.vercel.app/api/v1/internship");
  const featuredInternships = await res.json();
  return {
    props: {
      featuredInternships,
    },
  };
};
