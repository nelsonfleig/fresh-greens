import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../../graphql/__generated__';
import { useUser } from '../../hooks/useUser';
import { NavContent, NavHeader, NavLink, NavLinks, NavLogin, NavLogo, NavLogout } from './styles';

interface Props {}

export const Navbar = (props: Props) => {
  const [logout] = useLogoutMutation({
    refetchQueries: ['Me'],
  });
  const router = useRouter();

  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("You're logged out!", { position: 'top-center' });
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <NavHeader>
      <NavContent>
        <Link href="/">
          <NavLogo>
            <Image src="/images/logo.png" alt="logo" width={47} height={50} />
            <h1>FRESH GREENS</h1>
          </NavLogo>
        </Link>
        <NavLinks>
          {user && !user?.isSeller && (
            <NavLink>
              <Link href="/create-shop">
                <a>Become a Seller</a>
              </Link>
            </NavLink>
          )}
          {user?.isSeller && (
            <NavLink>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </NavLink>
          )}
          {!user ? (
            <NavLink>
              <Link href="/login">
                <NavLogin>Login</NavLogin>
              </Link>
            </NavLink>
          ) : (
            <NavLink>
              <NavLogout onClick={handleLogout}>Logout</NavLogout>
            </NavLink>
          )}
        </NavLinks>
      </NavContent>
    </NavHeader>
  );
};
