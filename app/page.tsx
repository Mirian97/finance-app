import { UserButton } from "@clerk/nextjs";

const HomePage = async () => {
  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default HomePage;
