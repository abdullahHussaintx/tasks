import { Outlet } from "react-router-dom";

export const Layout1 = () => {
  return (
    <main className="  container mx-auto h-screen">
      <div className=" p-5 flex-1   flex  items-start justify-center h-screen">
        <Outlet />
      </div>
    </main>
  );
};
