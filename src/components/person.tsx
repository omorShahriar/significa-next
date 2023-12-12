import clsx from "clsx";
import Image from "next/image";

const Person = ({ className = "", name, position, photo }) => {
  return (
    <div
      className={clsx("flex items-center gap-3 whitespace-nowrap", className)}
    >
      <div
        className={clsx(
          "bg-foreground/10 w-[48px] h-[56px]  overflow-hidden avatar"
        )}
      >
        <Image
          className="object-center object-cover w-full h-full"
          src={photo}
          width={100}
          height={100}
          alt={name}
        />
      </div>
      <div>
        {name && <p className="text-base font-semibold leading-none">{name}</p>}
        {position && (
          <p className="mt-1 text-base font-semibold leading-none text-foreground-secondary">
            {position}
          </p>
        )}
      </div>
    </div>
  );
};

export default Person;
