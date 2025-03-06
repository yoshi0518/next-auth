import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

const Page: React.FC = async () => {
  const session = await auth();
  if (!session) return redirect('/');
  return (
    <div>
      <p>Dashboard</p>
      <Link href="/">Top</Link>
    </div>
  );
};

export default Page;
