import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useLogoutMutation } from '../../graphql/__generated__';
import { useUser } from '../../hooks/useUser';
import { NavContent, NavHeader, NavLink, NavLinks, NavLogin, NavLogo, NavLogout } from './styles';

interface Props {}

export const Navbar = (props: Props) => {
  const [logout] = useLogoutMutation({
    refetchQueries: ['Me'],
  });

  const { user } = useUser();

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
          <NavLink>
            <Link href="/login">
              <a>Become a Seller</a>
            </Link>
          </NavLink>
          {!user ? (
            <NavLink>
              <Link href="/login">
                <NavLogin>Login</NavLogin>
              </Link>
            </NavLink>
          ) : (
            <NavLink>
              <NavLogout onClick={async () => await logout()}>Logout</NavLogout>
            </NavLink>
          )}
        </NavLinks>
      </NavContent>
    </NavHeader>
  );
};
