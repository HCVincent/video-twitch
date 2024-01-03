import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </div>
  );
};

export default BrowseLayout;
