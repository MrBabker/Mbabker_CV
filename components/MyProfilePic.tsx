import Image from "next/image";
import { useEffect, useState } from "react";

export default function MyProfilePic({ onClose }: { onClose: () => void }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // يبدأ الأنميشن أول ما يظهر العنصر
    setTimeout(() => setAnimate(true), 10);
  }, []);

  return (
    <div
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="fixed inset-0 cursor-alias flex items-center justify-center z-50"
    >
      {/* الصندوق الأبيض (الكارد) */}
      <div
        style={{
          transform: animate ? "scale(1)" : "scale(0.8)",
          opacity: animate ? 1 : 0,
          transition: "all 0.3s ease",
        }}
        className="bg-blue-100 p-0.5 rounded-xl shadow-xl relative"
      >
        {/* زر إغلاق */}
        <div
          onClick={onClose}
          className="text-red-500 text-2xl font-bold cursor-pointer absolute top-2 right-3"
        >
          <Image
            src="/cls.png"
            alt="close Photo"
            className="w-10 h-10 rounded-2xl object-cover border-2 "
            width={200}
            height={200}
          />
        </div>

        {/* الصورة */}
        <Image
          src="/profile.png"
          alt="Profile Photo"
          className="w-60 h-60 rounded-2xl object-cover border-2 shadow-2xl"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
