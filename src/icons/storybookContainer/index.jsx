export const IconsStoryBookContainer = ({ children, iconName }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid",
          borderColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
        }}
      >
        {children}
        <p style={{ margin: 0 }}>{iconName}</p>
      </div>
    </>
  );
};
