import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Update Profile",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
