import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import {
  Button,
  Grid, Typography,
  CircularProgress,
} from '@material-ui/core'

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

import api from '@/service/api';
import Header from '@/components/Header';

import { UserPerfilStyled } from '@/styles/pages/user';

import { UserInstagram, UserPhotosData } from '@/interface';

interface UserPerfil {
  username: string;
}

export default function UserPerfil() {
  const [userInfor, setUserInfor] = useState<any[]>([]);
  const [userPhotos, setUserPhotos] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  const router = useRouter()
  const { username } = router.query
  console.log(username)
  useEffect(() => {
    function fetchUserPerfil() {
      api.get(`users/${username}`, {
        params: {
          client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
        }
      }).then((response: any) => {
        setUserInfor([response.data]);
      }
      ).catch((error: any) => toast.warning(error.message))
    }

    fetchUserPerfil();

    function fetchRandomPhotos() {
      api.get(`users/${username}/photos`, {
        params: {
          query: 'brazil',
          client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
        }
      }).then((response: any) => {
        setUserPhotos(response.data)
        console.log(response.data)
        setTimeout(() => setIsLoad(false), 3000)
      }
      ).catch((error: any) => toast.warning(error.message))
    }

    fetchUserPerfil();
    fetchRandomPhotos();

  }, [])

  return (
    <>
      <Header />
      <UserPerfilStyled>
        {userInfor.map((user) => (
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid container item xs={4}>
              <div className="profile-picture">
                <Image src={user?.profile_image?.medium} alt={`Perfil picture of ${username}`} width={95} height={95} />
              </div>
            </Grid>
            <Grid container direction="row" xs={8} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h2" component="h1">{username}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  style={{ marginTop: 15, padding: '0 16px' }}
                >Enviar mensagem</Button>
                <Button
                  variant="outlined"
                  style={{ marginTop: 15, padding: '0', marginLeft: 10 }}
                ><PersonRoundedIcon /></Button>
              </Grid>
            </Grid>

            <Grid container direction="column" justifyContent="space-between">
              <Typography variant="h1" component="h1">{user?.name}</Typography>
              <div className="user-bio">
                <Typography variant="h3" component="p">{user?.bio}</Typography>
              </div>
            </Grid>

            <Grid container direction="row" justifyContent="center"
              alignItems="center" spacing={1}  style={{ height: '550px', marginTop: 5 }}>
              {isLoad ? <CircularProgress color="secondary" style={{ marginTop: 10 }} /> : (
                <>
                  {userPhotos.map((photo: any) => (
                    <Grid item xs={4}>
                      <Image src={photo?.urls?.regular} alt={`photo published of ${username}`} width={230} height={230} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        ))}
      </UserPerfilStyled>
    </>
  );

}
