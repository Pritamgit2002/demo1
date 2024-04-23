import Image from "next/image";

export const Card = ({ card }: { card: any }) => {
  return (
    <div
      key={card.id}
      className={`group relative h-max w-[350px] overflow-hidden rounded-3xl py-10 px-5 leading-loose shadow-md shadow-gray-400 flex flex-col gap-y-5 ${
        card.id % 2 === 0
          ? "bg-black text-[#abee5f]"
          : "bg-[#abee5f] text-black"
      }`}
    >
      <p className=" text-xl sm:text-2xl  leading-relaxed ">{card.comment}</p>
      <div className=" w-full flex items-center justify-start gap-x-4  ">
        <Image
          src={card.image}
          alt="image"
          width={1200}
          height={1200}
          className=" w-16 h-16 rounded-full object-cover  "
        />
        <span className=" text-3xl font-semibold ">{card.name}</span>
      </div>
      <span className="text-lg font-semibold ">- {card.role}</span>
    </div>
  );
};
