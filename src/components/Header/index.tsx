import Link from 'next/link';
import Image from 'next/image';

import { HeaderStyled } from './styles';

export default function Header() {
  return (
    <HeaderStyled>
      <Link href="/">
        <a target="_self">
          <Image src="/image/mobile-nav.png" alt="instagram brand icon"
            width={103} height={29} />
        </a>
      </Link>
    </HeaderStyled>
  )
}