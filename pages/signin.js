import Image from "next/image";

const signin = () => {
  return (
    <div className="m-auto w-2/3 h-screen">
      <div className="pt-5">
        <a href="\">
          <Image src="/logo.svg" width={90} height={90} />
        </a>
      </div>
      <div className="mt-32 flex flex-col items-center gap-3">
        <p className="text-3xl font-bold">Sign In</p>
        <a className="text-sm underline text-gray-500" href="/signup">
          I don't have an account
        </a>
        <input
          className="px-2 py-1 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-2 py-1 rounded-md"
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default signin;
