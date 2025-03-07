import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export const SignoutButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
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
