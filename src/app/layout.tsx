import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "オセロ",
  description: "next prisma othello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="container mx-auto max-w-screen-sm flex-1 px-1 py-5">
              {children}
            </main>
            <footer className="py-5">
              <div className="text-center text-sm">Copyright</div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
