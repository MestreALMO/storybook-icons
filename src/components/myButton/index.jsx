export const MyButton = ({ color, backgroundColor, text }) => {
  console.log(color);
  return (
    <>
      <button style={{ color, backgroundColor, fontWeight: 800 }}>
        {text}
      </button>
    </>
  );
};
