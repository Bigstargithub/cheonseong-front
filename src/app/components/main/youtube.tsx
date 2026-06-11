import Link from "next/link";

export default function MainYoutubeArea({
  youtubeLink,
}: {
  youtubeLink?: string;
}) {
  if (!youtubeLink) return null;

  let youtubeVideoId: string | null = null;
  try {
    const youtubeURL = new URL(youtubeLink);
    youtubeVideoId = youtubeURL.searchParams.get("v");
  } catch {
    return null;
  }

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="lg:text-4xl text-2xl font-bold">설교영상</h3>
          <p className="mt-2 text-sm text-slate-500">
            예배 라이브, 설교영상, 성경공부 등의 교회 내 행사를 온라인으로 참여하세요
          </p>
        </div>
        <div className="pb-[56.25%] relative">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"
            className="w-full absolute top-0 left-0 h-full rounded-lg"
          ></iframe>
        </div>
        <div className="text-center mt-6">
          <Link
            href="https://www.youtube.com/channel/UCu03Z5hKSf8eJqAszNxKbrA"
            target="_blank"
            className="btn btn-youtube inline-block"
          >
            주복교회 유튜브 구독
          </Link>
        </div>
      </div>
    </section>
  );
}
