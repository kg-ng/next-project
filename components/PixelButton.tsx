import React from "react";

const PixelButton = ({
  title,
  icon,
  position,
  handleClick,
  href,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  href?: string;
  otherClasses?: string;
}) => {
  const content = (
    <span
      className={`inline-flex h-full w-full cursor-pointer items-center justify-center pixel-corners-sm
           bg-terracotta-solid border-2 border-espresso-solid px-6 font-pixel text-[11px] md:text-xs uppercase tracking-wider text-espresso-solid gap-2 ${otherClasses ?? ""}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </span>
  );

  const buttonClass =
    "relative inline-flex h-12 overflow-hidden pixel-corners-sm pixel-shadow pixel-shadow-hover bg-terracotta-solid focus:outline-none";

  if (href) {
    return (
      <a href={href} className={buttonClass} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={handleClick}>
      {content}
    </button>
  );
};

export default PixelButton;
