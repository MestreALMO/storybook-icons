export const MyButton = ({ color, backgroundColor, text }) => {
  return (
    <>
      <button style={{ color, backgroundColor, fontWeight: 800 }}>
        {text}
      </button>
    </>
  );
};
