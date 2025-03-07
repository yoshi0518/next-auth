import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';

export const SigninButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn();
      }}
    >
      <Button
        type="submit"
        variant="outline"
      >
        {children}
      </Button>
    </form>
  );
};
