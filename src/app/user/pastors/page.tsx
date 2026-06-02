import HeroBanner from "./_components/HeroBanner";
import MainPastor from "./_components/MainPastor";
import PastorGrid from "./_components/PastorGrid";

const ASSOCIATE_PASTORS = [
  { src: "/sub_pastor_yang.avif", alt: "부목사 양성규", role: "부목사", name: "양성규" },
  { src: "/sub_pastor_bae.avif", alt: "교육목사 배종화", role: "교육목사", name: "배종화" },
];

const EDUCATION_DEACONS = [
  { src: "/edu_missionary_jo.avif", alt: "교육전도사 조상범", role: "교육전도사", name: "조상범" },
];

export default function PastorsPage() {
  return (
    <main>
      <HeroBanner />
      <MainPastor />
      <div className="border-t border-gray-100" />
      <PastorGrid title="부목사" pastors={ASSOCIATE_PASTORS} />
      <div className="border-t border-gray-100" />
      <PastorGrid title="교육 전도사" pastors={EDUCATION_DEACONS} />
    </main>
  );
}
