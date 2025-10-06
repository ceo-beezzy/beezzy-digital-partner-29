const HexagonPattern = () => {
  return (
    <div className="absolute -bottom-[15vh] -left-[15vw] w-[50vw] h-[50vh] pointer-events-none z-[1] origin-center rotate-45 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-25"
      >
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <polygon
              points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
              fill="none"
              stroke="#F7F1DD"
              strokeWidth="1"
            />
            <polygon
              points="0,0 12.5,7.2 12.5,21.7 0,28.9 -12.5,21.7 -12.5,7.2"
              fill="none"
              stroke="#F7F1DD"
              strokeWidth="1"
            />
            <polygon
              points="49.6,0 62.1,7.2 62.1,21.7 49.6,28.9 37.1,21.7 37.1,7.2"
              fill="none"
              stroke="#F7F1DD"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default HexagonPattern;
