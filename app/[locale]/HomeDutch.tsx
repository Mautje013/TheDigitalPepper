import Hero from "../../components/Hero";
import DigitalCompassExplainer from "../../components/DigitalCompassExplainer";
import Features from "../../components/Features";
import Concept from "../../components/Concept";
import BrandWall from "../../components/BrandWall";
import CustomApproach from "../../components/CustomApproach";
import CompassCta from "../../components/CompassCta";

export default function HomeDutch() {
  return (
    <div className="min-h-screen">
      <Hero locale="nl" />
      <DigitalCompassExplainer locale="nl" />
      <Features locale="nl" />
      <Concept locale="nl" />
      <BrandWall locale="nl" />
      <CustomApproach locale="nl" />
      <CompassCta locale="nl" />
    </div>
  );
}

