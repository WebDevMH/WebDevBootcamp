function Button({ bgColor, textColor, borderW, children, onClick }) {
  const styles = {
    backgroundColor: bgColor,
    color: textColor,
    borderWidth: borderW,
    borderColor: textColor,
    fontSize: '2rem',
  };
  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
}

export default Button;
