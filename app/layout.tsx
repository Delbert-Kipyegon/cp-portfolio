import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Cyprian Lemtukei - Developer & Business Person",
  description:
    "Portfolio of Cyprian Lemtukei, showcasing development and business expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-[#021842] text-white`}>
        {children}
      </body>
    </html>
  );
}
