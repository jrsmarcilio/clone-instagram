import { useEffect, useState } from 'react';
import Image from 'next/image';
import Router from 'next/router'

import Carousel from "react-elastic-carousel";

import { CarouselPerfilStyle } from "./styles";
import api from '@/service/api';
import React from 'react';
import { toast } from 'react-toastify';

import { UserCarousel } from '@/interface'
import { CardContent, Typography } from '@material-ui/core';
import { CardUserCarousel } from '@/styles/MaterialGuide/'


export default function CarouselPerfil() {
  const [userCarousel, setUserCarousel] = useState<any[]>([]);

  useEffect(() => {
    function fetchApiUnsplash() {
      api.get('search/users?', {
        params: {
          query: 'usa',
          client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
        }
      }).then((response: any) => setUserCarousel(response.data.results)
      ).catch(error => toast.warning(error.message));
    }
    fetchApiUnsplash();
  }, [])

  const handleRedirectUserPerfil = (username: string) => () => {
    Router.push(`/users/${username}`)
  }

  return (
    <CarouselPerfilStyle>
      <Carousel
        showArrows={false}
        isRTL
        itemPadding={[0, 5]}
        breakPoints={
          [
            { width: 1, itemsToShow: 5 },
            { width: 550, itemsToShow: 6 },
            { width: 768, itemsToShow: 8 },
            { width: 1200, itemsToShow: 12 },
          ]
        }
      >
        {userCarousel.map((item: UserCarousel, index: number) => (
          <CardUserCarousel
            key={index}
            onClick={handleRedirectUserPerfil(item.username)}
          >
            <div className="profile-picture">
              <Image src={item.profile_image?.medium} alt={`Profile picture of ${item.name}`} width={56} height={56} />
            </div>
            <CardContent>
              <Typography variant="h2" component="p">
                {item.name}
              </Typography>
            </CardContent>
          </CardUserCarousel>
        ))}
      </Carousel>
    </CarouselPerfilStyle >
  );
}