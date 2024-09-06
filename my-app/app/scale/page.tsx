import Hero from "../components/Hero/Hero";
import Scale from "@/public/scale.jpg";

const ScalePage = () => {
  return (
    <div className="absolute -z-10 inset-0">
      <Hero imgData={Scale} imgAlt={"Scale Factory"} title="Scale Factory " />
    </div>
  );
};

export default ScalePage;
