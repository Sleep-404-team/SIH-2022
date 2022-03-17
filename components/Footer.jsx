import Link from "next/link";

const Footer = () => {
  const navElements = [
    { page: "Login", href: "#" },
    { page: "Internships", href: "/internships" },
    { page: "Search", href: "#" },
    { page: "About", href: "#" },
  ];

  return (
    <footer className="flex flex-col items-center bg-[#1b2027] p-6 text-white">
      <div className="flex gap-6 pb-4 text-xl font-medium">
        {navElements.map((element, id) => (
          <Link href={element.href} key={id}>
            {element.page}
          </Link>
        ))}
      </div>
      <div className="text-sm">Sleep 404 (C) 2022</div>
    </footer>
  );
};

export default Footer;
