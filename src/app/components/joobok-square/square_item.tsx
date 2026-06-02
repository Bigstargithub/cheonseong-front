import Image from "next/image";

export default function SquareItemComponent({
  thumbnail,
  title,
  description,
  link,
}: {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}) {
  const onClickDiv = () => {
    const linkURL = `${process.env.NEXT_PUBLIC_SERVER_URL}${link}`;
    window.open(linkURL, "_blank");
  };

  return (
    <div
      className="lg:w-3/4 m-auto flex flex-col lg:flex-row justify-center content-center lg:justify-start lg:content-start mt-10 gap-5 cursor-pointer"
      onClick={onClickDiv}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`}
        width={400}
        height={0}
        alt="주복광장"
        className="w-auto max-h-[300px] m-auto lg:m-0"
      />
      <div className="flex flex-col lg:justify-between lg:content-between justify-center content-center items-center">
        <div>
          <h3 className="text-bold text-2xl font-semibold">{title}</h3>
          <p className="lg:mt-4 mt-2 text-md font-medium text-grey-300 lg:text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
