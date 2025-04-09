import SwitchTheme from "@/components/themes/switch-theme";
import { routes } from "@/routes/routes";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-card sticky top-0 !z-50 flex h-16 w-full items-center justify-between px-2 shadow-lg md:px-5">
      <Link href={routes.root.landing}>
        <h1 className="animate-pulse text-2xl font-bold">LOGO</h1>
      </Link>

      <SwitchTheme />
    </header>
  );
};

export default Header;
