import Image from "next/image";

export const Logo = () => {
  return (
    <div className="image-two">
      <Image
        height={39}
        width={50}
        alt="logo"
        src="/logo.svg"
        className="h-auto w-auto"
      />
    </div>
  );
};
