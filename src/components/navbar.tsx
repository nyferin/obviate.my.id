import Link from "next/link";
import ThemeToggle from "./ui/theme-toggle";

export interface FlatNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface FlatNavLinkData {
  href: string;
  text: string;
}

export function FlatNavLink({ href, children }: FlatNavLinkProps) {
  return (
    <Link href={href} className="text-url transition-colors">
      {children}
    </Link>
  );
}

export function Navbar() {
  const links: FlatNavLinkData[] = [
    { href: "/", text: "home" },
    { href: "/posts", text: "posts" },
    { href: "/works", text: "works" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/25 backdrop-blur w-full">
      <nav className="w-full max-w-3xl mx-auto px-5 py-3 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Link href="/" className="text-xl font-bold">
            obviate
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex gap-5 items-center">
          {links.length > 0 &&
            links.map((link) => (
              <FlatNavLink key={link.href} href={link.href}>
                <span className="text-url-decoration">/</span>
                {link.text}
              </FlatNavLink>
            ))}
        </div>
      </nav>
    </header>
  );
}
