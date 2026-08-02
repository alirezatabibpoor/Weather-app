import { ToastContainer } from "react-toastify";
import "leaflet/dist/leaflet.css";
import StoreProvider from "./storeprovider";
import "react-toastify/dist/ReactToastify.css";
import "./design.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Weather App",
  description: "Modern Weather Application",
  icons: {
    icon: "🌤️",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        <body>
          <StoreProvider>
            {children}
          </StoreProvider>

          <ToastContainer
            autoClose={3000}
            draggable
            position="bottom-center"
          />
        </body>
      </ThemeProvider>
    </html>
  );
}