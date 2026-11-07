import "./globals.css";

export const metadata = {
  title: "Rahul Prajapati • Network Support & MIS Specialist",
  description: "Portfolio of Rahul Prajapati - Network Support, LAN/WAN Troubleshooting, TCP/IP, DNS, DHCP, SQL, Excel & MIS Specialist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}