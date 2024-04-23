import Image from "next/image";

export const Card = ({ card }: { card: any }) => {
  return (
    <div
      key={card.id}
      className={`group relative h-max w-[350px] overflow-hidden rounded-3xl py-10 px-5 shadow-md shadow-gray-400 flex flex-col gap-y-8  ${
        card.id % 2 === 0
          ? "bg-black text-[#abee5f]"
          : "bg-[#abee5f] text-black"
      }`}
    >
      <div
        className=" text-xl sm:text-2xl leading-tight "
        style={{ lineHeight: "45px" }}
      >
        {card.comment}
      </div>
      <div className=" w-full flex items-center justify-start gap-x-4  ">
        <Image
          src={card.image}
          alt="image"
          width={1200}
          height={1200}
          className=" w-16 h-16 rounded-full object-cover  "
        />
        <span className=" text-3xl font-semibold ">{card.name}</span>
        {card.id % 2 === 0 ? (
          <>
            <Image
              src="/green.svg"
              alt="logo"
              width={1200}
              height={1200}
              className=" h-10 w-10 object-contain "
            />
          </>
        ) : (
          <Image
            src="/black.svg"
            alt="logo"
            width={1200}
            height={1200}
            className=" h-10 w-10 object-contain "
          />
        )}
      </div>
      <span className="text-lg font-semibold ">
        {" "}
        <span>&#8212;</span> {card.role}
      </span>
    </div>
  );
};
