import Config from "../../../utils/config";
import Portfolio from "../../../components/Portfolio/Portfolio";

export default function Home({ profile }) {
  return (
    <>
      <Portfolio profile={profile} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { userId } = context.query;
  const resProfile = await fetch(`${Config.API_URL}/user/${userId}`);
  const profile = await resProfile.json();
  return {
    props: {
      profile,
    },
  };
};
