import { useEffect, useState } from 'react';
import { HomeStyled } from '@/styles/pages/home';

import CarouselPerfil from '@/components/CarouselPerfil';
import CarouselFeed from '@/components/Feed';

import Header from '@/components/Header';
import api from '@/service/api';
import { toast } from 'react-toastify';

export default function Home() {
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    function fetchApiUnsplash() {
      api.get('search/users?', {
        params: {
          query: 'usa',
          client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
        }
      }).then((response: any) => setUserData(response.data.results)
      ).catch(error => toast.warning(error.message));
    }
    fetchApiUnsplash();
  }, [])

  return (
    <HomeStyled>
      <Header />

      <div className="home-content-mobile">
        <CarouselPerfil userCarousel={userData} />
      </div>

      <div className="home-content-mobile">
        <CarouselFeed feedCarousel={userData} />
      </div>

    </HomeStyled>
  )
}
