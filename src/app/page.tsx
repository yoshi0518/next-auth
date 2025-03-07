import { auth } from '@/auth';

import { SigninButton } from './_component/auth/signin-button';
import { SignoutButton } from './_component/auth/signout-button';

const Home: React.FC = async () => {
  const session = await auth();

  console.log({ session });

  if (!session)
    return (
      <>
        <p className="text-extrabold mt-8 bg-blue-200 p-4 text-center text-2xl">Home</p>
        <p>サインインしていません</p>
        <SigninButton>SignIn</SigninButton>
      </>
    );

  return (
    <main className="">
      <p className="text-extrabold mt-8 bg-blue-200 p-4 text-center text-2xl">Home</p>
      <p>{session.user!.name}</p>
      <p>{session.user!.email}</p>
      <SignoutButton>SignOut</SignoutButton>
    </main>
  );
};
export default Home;
