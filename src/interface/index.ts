export interface UserInstagram {
  instagram_username: string;
  name: string;
  bio: string;
  location: string;
  links: Array<string>;
  profile_image: Array<string>;
  following_count: number;
  followers_count: number;
  total_photos: number;
}
export interface UserPhotosData {
  photos: Array<string>;
}

export interface UserCarousel {
  username: string;
  id: string;
  name: string;
  profile_image: any;
}
