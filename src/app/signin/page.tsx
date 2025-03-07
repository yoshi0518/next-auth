import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <form
        action={async () => {
          'use server';
          await signIn('google', { redirectTo: '/dashboard' });
        }}
      >
        <Button
          type="submit"
          variant="outline"
        >
          <Twitter />
          SignIn
        </Button>
      </form>

      <form
        action={async () => {
          'use server';
          await signIn('github', { redirectTo: '/dashboard' });
        }}
      >
        <Button
          type="submit"
          variant="outline"
        >
          <Github />
          SignIn
        </Button>
      </form>
    </div>
  );
};

export default Page;
