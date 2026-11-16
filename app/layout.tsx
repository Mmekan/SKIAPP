import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKI — study inside the outline",
  description:
    "Short video lessons built from your official course outline and past questions. Ask about the exact part you're watching.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${openSans.variable} h-full antialiased`}
    >
      <head>
        {/* apply the saved theme before first paint so there is no flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("ski-theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes onto <body> */}
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
