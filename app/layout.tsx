import "./globals.css";
import ReduxProvider from "@/app/redux/ReduxProvider";

export const metadata = {
  title: "CRED Garage Dashboard",
  description: "Inspired by CRED UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
