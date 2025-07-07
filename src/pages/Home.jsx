// src/pages/Home.jsx
import HeroSection from "../components/landing/HeroSection";
import IntroSection from "../components/landing/IntroSection";
import CategoryGrid from "../components/landing/CategoryGrid";
import FeatureHighlights from "../components/landing/FeatureHighlights";
import CourseList from "../components/landing/CourseList";
import TestimonialSection from "../components/landing/TestimonialSection";
import ContactSection from "../components/landing/ContactSection";
// import PromotionBanner from "./components/landing/PromotionBanner";
// import PartnersLogos from "./components/landing/PartnersLogos";
// import TestimonialSection from "./components/landing/TestimonialSection";
// import BlogPreview from "./components/landing/BlogPreview";
// import CTASection from "./components/landing/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <CategoryGrid />
      <FeatureHighlights />
      <CourseList />
      <TestimonialSection />
      <ContactSection />
      {/* <PromotionBanner />
      <PartnersLogos />
      <TestimonialSection />
      <BlogPreview />
      <CTASection /> */}
    </div>
  );
}
