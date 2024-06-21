import Link from 'next/link';
import ButtonSignOut from '../button/buttonSignIn';
//import { User } from '../../models/User'; // Perbarui jalur ke lokasi yang benar

export const SignInOrOutButton = ({ user }: { user: String | null }) => (
    user ? <ButtonSignOut /> : (
      <Link
        href={"/sign-in"}
        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
      >
        Sign In
      </Link>
    )
  );