import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const ContactSubsection = ({ heading, icon, content }: any) => {
  const IconComponent =
    icon === "phone"
      ? AiOutlinePhone
      : icon === "mail"
      ? AiOutlineMail
      : AiOutlineHome;

  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium">{heading}</h3>
        <button
          onClick={() => {
            navigator?.clipboard?.writeText(content);
          }}
          className="flex flex-row items-center gap-2"
        >
          {IconComponent && <IconComponent className="text-xl stroke-[3]" />}
          {content}
        </button>
      </div>
    </>
  );
};
