import { useEffect, useState } from 'react';
import Image from 'next/image';
import Router from 'next/router'

import Carousel from "react-elastic-carousel";

import { CarouselFeedStyle } from "./styles";

import { Avatar, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@material-ui/core';

import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

import { CardFeedCarousel } from '@/styles/MaterialGuide'


export default function CarouselFeed({ feedCarousel }: any) {
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    function handleSetData() {
      setUserData(feedCarousel);
      console.log(userData);
    }
    handleSetData();
  }, [feedCarousel])

  const handleRedirectUserPerfil = (username: string) => () => {
    Router.push(`/users/${username}`)
  }

  return (
    <CarouselFeedStyle>
      <Carousel
        showArrows={false}
        isRTL
        verticalMode
        itemPadding={[0, 5]}
        breakPoints={
          [
            { width: 1, itemsToShow: 6 },
            { width: 550, itemsToShow: 8 },
            { width: 768, itemsToShow: 10 },
            { width: 1200, itemsToShow: 12 },
          ]
        }
      >
        {userData?.map((feed: any, index: number) => (
          <CardFeedCarousel key={index}>
            <CardHeader
              avatar={
                <Avatar>
                  <Image src={feed?.profile_image?.medium} alt={`Profile picture of ${feed?.username}`} width={56} height={56} />
                </Avatar>
              }
              title={
                <Typography variant="body2" onClick={handleRedirectUserPerfil(feed.username)}>{feed?.username}</Typography>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertOutlined />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="510"
              image={feed?.photos[0]?.urls?.full}
              alt={`Profile picture of ${feed?.username}`}
            />
            <CardActions>
              <section className="first-buttons">
                <Checkbox
                  icon={<ShareOutlinedIcon />}
                  checkedIcon={<ShareOutlinedIcon />}
                />
                <Checkbox
                  icon={<ModeCommentOutlinedIcon />}
                  checkedIcon={<ModeCommentOutlinedIcon />}
                />
                <Checkbox
                  icon={<FavoriteBorderIcon />}
                  checkedIcon={<FavoriteOutlinedIcon />}
                />
              </section>
              <Checkbox
                icon={<TurnedInNotOutlinedIcon />}
                checkedIcon={<TurnedInNotOutlinedIcon />}
              />
            </CardActions>
            <CardContent>
              <Typography variant="body2" component="p">
                {feed?.username}
              </Typography>
            </CardContent>
          </CardFeedCarousel>
        ))}
      </Carousel>
    </CarouselFeedStyle >
  );
}