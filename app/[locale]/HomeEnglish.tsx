import Hero from "../../components/Hero";
import DigitalCompassExplainer from "../../components/DigitalCompassExplainer";
import Features from "../../components/Features";
import Concept from "../../components/Concept";
import BrandWall from "../../components/BrandWall";
import CustomApproach from "../../components/CustomApproach";
import CompassCta from "../../components/CompassCta";

export default function HomeEnglish() {
  return (
    <div className="min-h-screen">
      <Hero locale="eng" />
      <DigitalCompassExplainer locale="eng" />
      <Features locale="eng" />
      <Concept locale="eng" />
      <BrandWall locale="eng" />
      <CustomApproach locale="eng" />
      <CompassCta locale="eng" />
    </div>
  );
}

