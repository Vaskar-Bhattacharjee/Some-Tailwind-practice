import Link from "next/link";
import ModeToggle from "./mode-toggle";

function Navbar() {
    const navlinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]
  return (
    <div className="flex items-center justify-between sticky top-0 bg-neutral-100 dark:bg-neutral-900 border-b-[0.1px] border-zinc-600 ">
        <nav className=" ml-4 px-2 py-3 ">
          {navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-neutral-700 text-[16px] tracking-tight font-medium  dark:text-neutral-200 mx-2 p-1 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
        </nav>
        <ModeToggle />
    </div>
  )
}

export default Navbar