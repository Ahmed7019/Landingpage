import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Swift Digital Marketing Egypt | سويفت للتسويق الرقمي مصر";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Load the Noto Naskh Arabic font
  const notoNaskhArabic = readFileSync(
    join(process.cwd(), "public/fonts/NotoNaskhArabic-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a1f 100%)",
          padding: "40px",
        }}
      >
        {/* Logo and Brand Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              fontSize: "48px",
              fontWeight: "bold",
              color: "#10b981",
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#10b981",
              letterSpacing: "-2px",
            }}
          >
            Swift
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Digital Marketing Services in Egypt
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "40px",
            textAlign: "center",
            fontFamily: "Noto Naskh Arabic",
          }}
        >
          خدمات التسويق الرقمي في مصر
        </div>

        {/* Services */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            Graphic Design | Content Creation | Video Production
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#9ca3af",
              textAlign: "center",
              fontFamily: "Noto Naskh Arabic",
            }}
          >
            تصميم جرافيكي | صناعة محتوى | تصوير فيديوهات
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Naskh Arabic",
          data: notoNaskhArabic,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
