import Image from "next/image";
import { useState } from "react";

const Topbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="mx-auto flex w-2/3 items-center justify-between pt-10">
      <a href="/">
        <Image src="/logo.svg" width={40} height={40} />
      </a>
      {isLogged ? (
        <a href="/profile">
          <Image src="/profile.svg" width="40px" height="40px" />
        </a>
      ) : (
        <div className="rounded-xl bg-[#1e204c] px-12 py-1 text-xl text-white">
          <a href="/signin">Login</a>
        </div>
      )}
    </div>
  );
};

export default Topbar;
