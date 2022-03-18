import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="m-auto flex flex-col items-center gap-3 rounded-lg bg-white p-8 text-[#1e204c]">
      <Image src="/profile.svg" width={90} height={90} />
      <p className="text-3xl font-bold">John Doe</p>
      <p className="text-lg font-medium">Software Engineer</p>
      <div className="flex gap-5">
        <Image src="/images/profile/git.svg" width={50} height={50} />
        <Image src="/images/profile/facebook.svg" width={50} height={50} />
      </div>
      <p className="text-md">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam eos
        deleniti earum voluptatibus dicta dolorem accusamus nostrum. Ipsam
        molestiae facilis. Quos ducimus veritatis deleniti nobis praesentium
        nihil saepe omnis totam!
      </p>
    </div>
  );
};

export default ProfileCard;
