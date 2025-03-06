import { signOut } from '@/auth';

export const SignoutButton: React.FC = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        type="submit"
        className="rounded border bg-black p-2 text-white"
      >
        SignOut
      </button>
    </form>
  );
};
