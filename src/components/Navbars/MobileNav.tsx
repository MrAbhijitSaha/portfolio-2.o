"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import ThemeChangeBtn from "../ThemeChangeBtn";

const MobileNav = () => {
  const { theme } = useTheme();
  return (
    <section>
      <Image
        src={theme === "dark" ? "/logowhite.png" : "/logo.png"}
        alt="logo"
        height={25}
        width={25}
      />
      <ThemeChangeBtn />
    </section>
  );
};

export default MobileNav;
