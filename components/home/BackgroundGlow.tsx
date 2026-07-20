export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full"></div>
    </>
  );
}