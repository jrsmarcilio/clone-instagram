import Image from 'next/image';
import Router from 'next/router'
import Carousel from "react-elastic-carousel";

import { CardContent, Typography } from '@material-ui/core';
import { CardUserCarousel } from '@/styles/MaterialGuide/'

import { UserCarousel } from '@/interface'
import { CarouselPerfilStyle } from "./styles";

export default function CarouselPerfil({ userCarousel }: any) {

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