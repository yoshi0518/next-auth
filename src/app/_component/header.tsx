import Link from 'next/link';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { headerSigninLinks, headerSignoutLinks } from '@/constants';

import { SigninButton } from './auth/signin-button';
import { UserAvatar } from './auth/user-avatar';

export const Header: React.FC = async () => {
  const session = await auth();

  const headerLinks = session ? headerSigninLinks : headerSignoutLinks;

  return (
    <header className="border-b-2 px-8 py-4">
      <ul className="flex gap-8">
        {headerLinks.map((link) => (
          <li key={link.key}>
            <Button variant="link">
              <Link href={link.route}>{link.label}</Link>
            </Button>
          </li>
        ))}
        <li className="ml-auto">{session ? <UserAvatar /> : <SigninButton />}</li>
      </ul>
    </header>
  );
};
