import { AuthHeader } from "../components/auth/AuthHeader";
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