import Hero from "./components/Hero/Hero";
import homeImg from "@/public/home.jpg";
export default function Home() {
  return (
    <div className="">
      <div className="absolute -z-10 inset-0">
        <Hero
          imgData={homeImg}
          imgAlt={"Car Factory"}
          title="Car Factory Home"
        />
      </div>
    </div>
  );
}
