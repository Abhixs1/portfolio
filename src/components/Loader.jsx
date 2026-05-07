import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Lightweight loader for Suspense boundaries (no R3F hooks)
export const SuspenseLoader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-primary'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-12 h-12 rounded-full border-4 border-[#915EFF]/30 border-t-[#915EFF] animate-spin' />
        <p className='text-secondary text-sm'>Loading...</p>
      </div>
    </div>
  );
};

export default CanvasLoader;
