const DotSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-14 w-14">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute inset-0 flex items-start  justify-center"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            <span
              className="h-2 w-2 rounded-full bg-[#111827] animate-dotPulse"
              style={{
                animationDelay: `${i * 0.075}s`,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default DotSpinner;
