import SwitchTheme from "@/components/themes/switch-theme";

const Header = () => {
  return (
    <header className="w-full bg-card h-16 flex items-center sticky top-0 justify-between px-2 md:px-5 shadow-lg !z-50">
      <h1 className="animate-pulse text-2xl font-bold">LOGO</h1>
      <SwitchTheme />
    </header>
  );
};

export default Header;
