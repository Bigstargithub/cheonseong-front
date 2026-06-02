import Image from "next/image";

type Pastor = {
  src: string;
  alt: string;
  role: string;
  name: string;
};

type Props = {
  title: string;
  pastors: Pastor[];
};

export default function PastorGrid({ title, pastors }: Props) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pastors.map((pastor) => (
            <div
              key={pastor.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center w-56"
            >
              <Image
                src={pastor.src}
                width={160}
                height={160}
                alt={pastor.alt}
                className="rounded-xl object-cover w-40 h-40"
              />
              <span className="mt-4 inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                {pastor.role}
              </span>
              <p className="mt-2 text-lg font-bold text-gray-900">{pastor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
