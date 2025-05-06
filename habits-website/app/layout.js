import Header from "../app/_components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "../app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Habits",
    default: "Welcome / Habits",
  },
  description: "Track your life",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className}
        bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <MantineProvider>{children}</MantineProvider>
          {/* <main className="max-w-7xl mx-auto w-full">{children}</main> */}
        </div>
      </body>
    </html>
  );
}
