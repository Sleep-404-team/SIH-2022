import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-7xl font-bold text-[#1e204c]">
        A space for interns to connect with the Company
      </div>
      <div className="min-w-max rounded-xl bg-[#1e204c] px-8 py-1 text-xl text-white">
        <Link href="/signup">Get Started</Link>
      </div>
    </div>
  );
};

export default Hero;
