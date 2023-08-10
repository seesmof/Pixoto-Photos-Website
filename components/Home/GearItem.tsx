import { AiOutlineCheckCircle } from "react-icons/ai";

export const GearItem = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-row font-medium gap-2 text-lg items-center">
      <AiOutlineCheckCircle className="text-3xl stroke-[1]" />
      {name}
    </div>
  );
};
