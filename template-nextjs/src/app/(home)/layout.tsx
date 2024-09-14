import Navbar from "@/components/layout/navbar";
import { createClient } from "@/utils/supabase/server";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabaseClient = createClient();
  const {
    data: { user },
  } = await supabaseClient.auth.getUser()

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}
