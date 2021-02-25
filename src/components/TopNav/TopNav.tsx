import React from "react";

interface Props {
  component: React.ReactNode;
}

const TopNav: React.FC<Props> = ({ component }) => {
  return (
    <>
      <nav className="flex flex-wrap font-serif w-full">
        <main className="w-full">
          <section>{component}</section>
        </main>
      </nav>
    </>
  );
};

export default TopNav;
