import { signIn } from '@/auth';

export const SigninButton: React.FC = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn();
      }}
    >
      <button
        type="submit"
        className="rounded border bg-black p-2 text-white"
      >
        SignIn
      </button>
    </form>
  );
};
