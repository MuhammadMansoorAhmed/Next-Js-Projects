import Hero from "../components/Hero/Hero";
import Reliability from "@/public/reliability.jpg";

const ReliabilityPage = () => {
  return (
    <div className="absolute -z-10 inset-0">
      <Hero
        imgData={Reliability}
        imgAlt={"Reliability Factory"}
        title="Reliability Factory "
      />
    </div>
  );
};

export default ReliabilityPage;
