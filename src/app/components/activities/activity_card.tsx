import Image from "next/image";
import Link from "next/link";
import { resolveGalleryImageSrc } from "./image_utils";

export default function ActivityCardComponent({
  id,
  title,
  description,
  thumbnailUrl,
}: {
  id: number;
  title: string;
  description: string;
  thumbnailUrl?: string;
}) {
  return (
    <Link href={`/user/activities/${id}`} className="block">
      <div className="lg:w-3/4 w-8/10 m-auto lg:flex content-center mt-8 gap-3 lg:gap-2 cursor-pointer rounded-sm">
        <div className="relative lg:max-w-[500px] max-h-[280px] w-full h-[240px] bg-gray-100">
        {thumbnailUrl ? (
          <Image
            src={resolveGalleryImageSrc(thumbnailUrl)}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            이미지 없음
          </div>
        )}
        </div>
        <div className="flex flex-col justify-between content-between p-3">
          <div>
            <h3 className="text-bold lg:text-4xl text-xl font-semibold break-all">
              {title}
            </h3>
            <p className="lg:mt-5 mt-2 lg:text-2xl text-lg font-medium text-gray-700 break-all">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

