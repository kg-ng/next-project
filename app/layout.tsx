import type { Metadata } from "next";
import { Inter, Silkscreen, VT323 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
// Retro pixel-art display font for headings/accents
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});
// Chunky pixel-terminal font used for tags, labels, and code-flavored bits
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono-pixel",
});

export const metadata: Metadata = {
  title: "Keith Ng — Cloud-Native Full Stack Engineer",
  description:
    "Portfolio of Keith Ng, a Cloud-Native Full Stack & DevSecOps Engineer building agentic AI automation, retro-cozy pixel style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${silkscreen.variable} ${vt323.variable} ${inter.className}`}
      >
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <KonamiEasterEgg />
        </ThemeProvider>
      </body>
    </html>
  );
}
