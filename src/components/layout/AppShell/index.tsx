'use client';

import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";

type AppShellProps = { children: React.ReactNode };

const showNavbar = ["/"];

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  console.log(pathname);

  const activeNavbar = showNavbar.includes(pathname);

  return (
    <>
      {activeNavbar && <Navbar />}
      <div>{children}</div>
    </>
  );
}