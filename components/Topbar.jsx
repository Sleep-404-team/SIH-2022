import Image from "next/image";

const Topbar = () => {
  return (
    <div className="m-auto flex w-2/3 items-center justify-between pt-5">
      <a href="/">
        <Image src="/logo.svg" width="90px" height="90px" />
      </a>
      <a href="/profile">
        <Image src="/profile.svg" width="40px" height="40px" />
      </a>
    </div>
  );
};

export default Topbar;
