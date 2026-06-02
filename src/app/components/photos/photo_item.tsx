import Image from "next/image";

export default function UserPhotoItemComponent({
  id,
  title,
  desc,
  thumbnail,
  setSelectedPhoto,
}: {
  id: number;
  title: string;
  desc: string;
  thumbnail: string;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className="lg:w-3/4 w-8/10 m-auto lg:flex content-center mt-10 gap-5 lg:gap-3 cursor-pointer rounded-sm"
      onClick={() => setSelectedPhoto(id)}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`}
        width={300}
        height={0}
        alt={title}
        className="lg:max-w-[400px] max-h-[300px] w-full"
      />
      <div className="flex flex-col justify-between content-between p-3">
        <div>
          <h3 className="text-bold lg:text-2xl text-xl font-semibold">
            {title}
          </h3>
          <p className="lg:mt-4 mt-2 lg:text-md text-sm font-medium text-grey-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
