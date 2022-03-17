import Image from "next/image";

const signup = () => {
  return (
    <div className="m-auto w-2/3 h-screen">
      <div className="pt-5">
        <a href="/">
          <Image src="/logo.svg" width={90} height={90} />
        </a>
      </div>
      <div className="mt-32 flex flex-col items-center gap-3">
        <p className="text-3xl font-bold">Sign Up</p>
        <a className="text-sm underline text-gray-500" href="/signin">
          I have an account
        </a>
        <input
          className="px-2 py-1 rounded-md"
          type="text"
          placeholder="Name"
        />
        <input
          className="px-2 py-1 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-2 py-1 rounded-md"
          type="text"
          placeholder="Username"
        />
        <input
          className="px-2 py-1 rounded-md"
          type="password"
          placeholder="Password"
        />
        <div className="grid grid-flow-col gap-6">
          <select className="px-2 py-1 rounded-md">
            <option hidden>Signup as</option>
            <option>Student</option>
            <option>Company</option>
          </select>
          <button className="px-2 py-1 rounded-md bg-[#1e204c] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default signup;
