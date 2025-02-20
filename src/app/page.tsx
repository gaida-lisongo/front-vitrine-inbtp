import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Video from "@/components/Video";
import Stats from "@/components/Metriques";
import PhotoGallery from "@/components/Gallery";
import Departements from "@/components/Departements";
import AdminSteps from "@/components/Process";

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/* <Hero /> */}
      <Departements />
      <AdminSteps />
      <Stats />
      <PhotoGallery />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Contact /> */}
      <Blog />
    </>
  );
}
