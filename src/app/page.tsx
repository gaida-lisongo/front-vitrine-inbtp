import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Stats from "@/components/Metriques";
import { Metadata } from "next";
import PhotoGallery from "@/components/Gallery";
import Departements from "@/components/Departements";
import AdminSteps from "@/components/Process";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

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
