import Image from "next/image";

const Loading = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden py-8"
      style={{
        background: `
      radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.2) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(173, 216, 230, 0.15) 0%, transparent 50%),
      linear-gradient(135deg, #1a0023 0%, #10002b 50%, #000014 100%)
    `,
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex justify-center items-center mt-5">
        <Image
          className="w-130 h-130"
          src="/assets/portal-rick-and-morty.gif"
          alt="Loading Portal"
          height={50}
          width={50}
        />
      </div>
    </div>
  );
};

export default Loading;
