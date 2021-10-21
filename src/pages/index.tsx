import { HomeStyled } from '@/styles/pages/home';

import CarouselPerfil from '@/components/CarouselPerfil';
import Header from '@/components/Header';

export default function Home() {
  return (
    <HomeStyled>
      <Header />

      <div className="home-carousel-content">
        <CarouselPerfil />
      </div>
    </HomeStyled>
  )
}
