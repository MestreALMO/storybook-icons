export const Icon = ({ children, height, width, viewBox, size }) => {
  return (
    <>
      {/* <svg
        height={`${size}px`}
        width={`${size}px`}
        viewBox={`0 0 ${size} ${size}`}
      > */}
      <svg height={height} width={width} viewBox={viewBox}>
        {children}
      </svg>
    </>
  );
};
