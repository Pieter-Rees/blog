import { ReactNode } from "react";
import Link from "next/link";

const name = "Pieter Rees";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Link href={`/`}>Home</Link>

      <main className="container mx-auto">{children}</main>
    </>
  );
}
