import Image from "next/image";

const Loading = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden flex items-center justify-center"
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
      <div className="w-[500px] md:w-[350px] lg:w-[500px] aspect-square">
        <Image
          className="w-full h-full object-contain"
          src="/assets/portal-rick-and-morty.gif"
          alt="Loading Portal"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default Loading;
