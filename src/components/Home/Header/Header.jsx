import React, { useState } from "react";
import { Logo, Menu, SearchBar } from "../../../utils/Export";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header className="  shadow-md bg-rose-500 text-stone-100">
      <section className="lg:max-w-[1100px] xl:max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-10 py-6 ">
        <Logo />
        <div className="flex">
          <SearchBar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
          />
          <Menu setShowSearchBar={setShowSearchBar} />
        </div>
      </section>
    </header>
  );
};

export { Header };
