import { auth } from '@/auth';

import { SigninButton } from './_component/auth/signin-button';
import { SignoutButton } from './_component/auth/signout-button';
import { UserAvatar } from './_component/auth/user-avatar';

const Home: React.FC = async () => {
  const session = await auth();

  console.log({ session });

  if (!session)
    return (
      <>
        <p>サインインしていません</p>
        <SigninButton />
      </>
    );

  return (
    <main className="">
      <p>{session.user!.name}</p>
      <p>{session.user!.email}</p>
      <UserAvatar />
      <SignoutButton />
    </main>
  );
};
export default Home;
