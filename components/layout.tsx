import { ReactNode } from "react";
import Link from "next/link";

const name = "Pieter Rees";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto text-black text-tahiti">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 p-8 ">
          <nav>
            <Link href={`/`}>Home</Link>
          </nav>
        </div>
        <div className="col-span-9 p-8">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
