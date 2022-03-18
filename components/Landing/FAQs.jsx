import Image from "next/image";

const FAQCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
      <details>
        <summary className="list-none">
          <div className="flex gap-3 items-center">
            <div className="rotate-0">
              <Image src="/arrow.svg" width={15} height={15} />
            </div>
            <div className="font-bold text-2xl">
              Lorem ipsum dolor sit amet, consectetur?
            </div>
          </div>
        </summary>
        <div className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
          perspiciatis? Doloribus officiis adipisci placeat nisi similique optio
          vero alias eaque, sequi deserunt consectetur consequatur atque
          tempore, modi magnam et pariatur!
        </div>
      </details>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="my-10">
      <div className="font-bold text-4xl text-[#1e204c] mb-5">FAQs</div>
      <div className="flex flex-col gap-5">
        {[...Array(3)].map((_, id) => (
          <FAQCard key={id} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
