
import { Galleria } from 'primereact/galleria';
        
import AstronomyPicture from '../components/AstronomyPicture';
import Footer from '../components/Footer';
import Nav from "../components/Nav";

export default function Link() {
  return (
    <div>
      <Nav />
      <div>
        <div>
         <AstronomyPicture />
        </div>
        <div>
        <div className="bg-white h-[0.5px] mt-10"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
