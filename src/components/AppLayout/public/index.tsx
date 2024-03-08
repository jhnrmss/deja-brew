import { Footer, Navigation } from "@/components";
import { Outlet } from "react-router";

export const PublicLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
