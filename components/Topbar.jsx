import Image from "next/image";
import { useState } from "react";

const Topbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="m-auto flex w-2/3 items-center justify-between pt-5">
      <a href="/">
        <Image src="/logo.svg" width="90px" height="90px" />
      </a>
      {isLogged ? (
        <a href="/profile">
          <Image src="/profile.svg" width="40px" height="40px" />
        </a>
      ) : (
        <div className="rounded-xl bg-[#1e204c] px-12 py-1 text-xl text-white">
          Login
        </div>
      )}
    </div>
  );
};

export default Topbar;
