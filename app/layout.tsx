import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* add font to body to be applied throught entire app */}
      {/* I guess google fonts have className property to add to className */}
      <body className={`${inter.className} antialiased`}>{children}</body> 
    </html>
  );
}
