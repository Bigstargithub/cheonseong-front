import Image from "next/image";

export default function MainPastor() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          담임목사
        </h2>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center w-72">
            <Image
              src="/main_pastor.avif"
              width={200}
              height={200}
              alt="담임목사 서범석"
              className="rounded-xl object-cover w-48 h-48"
            />
            <span className="mt-5 inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              담임목사
            </span>
            <p className="mt-3 text-xl font-bold text-gray-900">서범석</p>
          </div>
        </div>
      </div>
    </section>
  );
}
