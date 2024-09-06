import Hero from "../components/Hero/Hero";
import performanceImage from "@/public/performance.jpg";

const PerformancePage = () => {
  return (
    <div className="absolute -z-10 inset-0">
      <Hero
        imgData={performanceImage}
        imgAlt={"Performance Factory"}
        title="Performance Factory "
      />
    </div>
  );
};

export default PerformancePage;
