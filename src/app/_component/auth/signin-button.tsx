import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const SigninButton: React.FC = () => {
  return (
    <Button
      type="submit"
      variant="outline"
      asChild
    >
      <Link href="/signin">SignIn</Link>
    </Button>
  );
};
