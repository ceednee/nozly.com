import { cookies } from "next/headers";
import type { Metadata } from "next";

import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Nozly.com - Dashboard",
  description: "Nozly.com - Dashboard",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      {children}
    </SidebarProvider>
  );
}