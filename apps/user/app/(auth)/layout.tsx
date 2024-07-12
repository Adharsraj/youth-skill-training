import { AuthHeader } from "../components";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      { <AuthHeader />} 
      {children}
      {/* {<Footer/>} */}
    </main>
  );
}