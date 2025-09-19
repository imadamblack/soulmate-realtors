import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header
      className={`fixed top-0 ${path === '/survey' ? 'bg-transparent' : 'bg-brand-1'} backdrop-blur-lg w-screen shadow-lg ${path === '/survey' ? 'h-[4rem]' : 'h-[6rem]'} flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[10]">
        <div className="relative flex items-center h-[4rem] min-w-[24rem]">
          <Link href="/" passhref>
            <a>
              <Image
                src={logo}
                alt={info.companyName}
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      </div>
    </header>

  );
}
