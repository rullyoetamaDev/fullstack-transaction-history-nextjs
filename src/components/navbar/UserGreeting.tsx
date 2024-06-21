interface UserProps {
  user: {
    name: string;
  } | null;
}

export const UserGreeting = ({ user }: UserProps) => (
    <span className="self-center text-md font-semibold whitespace-nowrap dark:text-white">
     {user ? `Hallo, ${user.name}` : ""}
    </span>
  );