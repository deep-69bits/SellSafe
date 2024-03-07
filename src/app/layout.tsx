import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout/Layout'

export const metadata = {
  title: "WebAbility.io | Top Web Accessibility Widget for ADA & WCAG Compliance",
  description:
    "WebAbility.io is your ultimate solution for web accessibility, providing a top-notch widget for ADA and WCAG compliance.",
  keywords: [
    "WebAbility.io",
    "Web Accessibility Widget",
    "ADA Compliance",
    "WCAG Compliance",
    "WebAbility.io features",
    "Free Trial Accessibility Widget",
    "Affordable ADA Compliance",
    "Rapid Integration Accessibility",
    "Official Accessibility Statement",
    "Accessible Websites",
    "WebAbility.io solutions",
    "ADA Website Widget",
    "WCAG 2.0 Compliance",
    "Web Accessibility Certification",
    "WebAbility.io benefits",
    "ADA Compliance Tool",
    "WCAG Compliance Widget",
    "Accessibility for Websites",
    "Affordable Accessibility Solutions",
    "Accessibility Compliance Statement",
  ],
  canonical: "http://sellsafe.in/",
  metadataBase: new URL("http://sellsafe.in/"),
  openGraph: {
    url: "http://sellsafe.in/",
    title: "WebAbility.io | Top Web Accessibility Widget for ADA & WCAG Compliance",
    description:
      "WebAbility.io is your ultimate solution for web accessibility, providing a top-notch widget for ADA and WCAG compliance. ",
    images: [
      {
        url: "https://www.webability.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.224cf040.png&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Web Ability Landing Page",
        type: "image/png",
      },
      {
        url: "https://www.webability.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection_1_right.bf6223d4.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Web Ability Section 1 Image",
        type: "image/png",
      },
      {
        url: "https://www.datocms-assets.com/117504/1705688754-dall-e-2024-01-19-10-25-38-create-a-simple-cover-image-for-a-blog-post-about-digital-accessibility-the-image-should-feature-a-clean-and-modern-design-with-a-variety-of-abstrac.png?fit=crop&fm=webp&h=1000&w=2000",
        width: 1200,
        height: 630,
        alt: "Web Ability DatoCMS Image",
        type: "image/png",
      },
    ],
    siteName: "WebAbility ",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  )
}
