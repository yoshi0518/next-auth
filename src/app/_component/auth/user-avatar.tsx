import Image from 'next/image';
import { SignoutButton } from '@/app/_component/auth/signout-button';
import { auth } from '@/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const UserAvatar: React.FC = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={session.user.image!}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session.user.name}</DropdownMenuItem>
          <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignoutButton>SignOut</SignoutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
