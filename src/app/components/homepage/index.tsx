import Hero from "./hero";
import AboutSection from "./about";
import ServicesSection from "./services";

export default function Index() {
  return (
    <section>
      <Hero />
      <div id="about-section">
        <AboutSection />
      </div>
      <ServicesSection />
    </section>
  );
}
