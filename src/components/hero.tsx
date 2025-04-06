import Link from "next/link";

export interface HeroLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface HeroLinkData {
  href: string;
  text: string;
}

export function HeroLink({ href, children }: HeroLinkProps) {
  return (
    <Link href={href} className="text-url transition-colors" target="_blank">
      {children}
    </Link>
  );
}

export function Hero() {
  const links: HeroLinkData[] = [
    { href: "https://github.com/nyferin", text: "GitHub" },
    { href: "https://linkedin.com/in/nyferin", text: "LinkedIn" },
    { href: "mailto:anthonyfebrianariasena@gmail.com", text: "Mail" },
  ];

  return (
    <div className="rounded-sm px-0.5 py-3 text-justify">
      <div className="flex justify-between">
        <h2 className="text-current text-lg">
          <span className="font-bold">Anthony Febrian Aria Sena</span>
        </h2>

        <div className="flex items-center justify-center gap-3">
          {links.length > 0 &&
            links.map((link) => (
              <HeroLink key={link.href} href={link.href}>
                <span className="text-url-decoration">[</span>
                {link.text}
                <span className="text-url-decoration">]</span>
              </HeroLink>
            ))}
        </div>
      </div>
    </div>
  );
}
