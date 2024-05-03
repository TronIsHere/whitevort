import { FaLightbulb } from "react-icons/fa";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <aside className="bg-gray-800 text-white p-5 col-span-3 h-screen fixed top-0 left-0 w-64 transition-transform -translate-x-full sm:translate-x-0">
          text-2
        </aside>
        <div className="sm:ml-64 ">{children}</div>
      </div>
    </>
  );
}
