import "./globals.css";
import GoogleAnalytics from "@/utils/analytics";
import { MuiProvider } from "@/components";
export const metadata = {
  title: " مساعدة - من المغاربة للمغاربة",
  description: "موقع مساعدة عبارة عن عمل تطوعي غير ربحي لشباب مغاربة لا يمثل أي جهة او مجموعة، هدفنا هو إيصال الإغاثة الإنسانية لضحايا زلزال المغرب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <MuiProvider>
        <GoogleAnalytics GA_TRACKING_ID={process.env.MEASUREMENT_ID} />
        <body suppressHydrationWarning>{children}</body>
      </MuiProvider>
    </html>
  );
}
