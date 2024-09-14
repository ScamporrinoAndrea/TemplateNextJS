import Navbar from "@/components/layout/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar isLoggedIn={false} />
      {children}
    </>
  );
}
