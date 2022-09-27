export const Icon = ({ children, height, width, viewBox, color }) => {
  return (
    <>
      {/* <svg
        height={`${size}px`}
        width={`${size}px`}
        viewBox={`0 0 ${size} ${size}`}
      > */}
      <svg height={height} width={width} viewBox={viewBox} color={color}>
        {children}
      </svg>
    </>
  );
};
