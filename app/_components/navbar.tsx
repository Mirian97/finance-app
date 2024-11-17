"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-[1] flex justify-between border-b border-solid bg-background/60 px-8 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        </Link>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "font-semibold text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "font-semibold text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "font-semibold text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};
export default Navbar;
