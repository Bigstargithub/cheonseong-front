import Link from "next/link";
import HeroBanner from "./_components/HeroBanner";

const KAKAO_MAP_LINK = "https://map.kakao.com/?urlX=532250&urlY=925770&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false";

export default function ChurchLocationPage() {
  return (
    <main>
      <HeroBanner />

      <div className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-blue-700 mt-0.5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">주소</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                충남 천안시 서북구<br />두정상가6길 18 (두정동)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-blue-700 mt-0.5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">전화</p>
              <p className="text-sm text-gray-600">041-558-0142</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-blue-700 mt-0.5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">대중교통</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                두정역 1번 출구에서<br />646m
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href={KAKAO_MAP_LINK} target="_blank" className="btn btn-outline">
            카카오맵에서 길찾기
          </Link>
        </div>
      </div>
    </main>
  );
}
