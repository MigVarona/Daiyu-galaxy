
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Hero from "@/app/components/Hero"

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <div>
        <div>
        </div>
        <div>
        <div class="bg-white h-[0.5px] mt-10"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
