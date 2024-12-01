import "./topBar.css";

export const TopBar = () => {
  return (
    <div className="top-container">
      <img src="src/assets/search.png" className="icon" />
      <img src="src/assets/message.png" className="icon" />
      <img src="src/assets/action.png" className="icon" />
      <div className="line" />
      <div className="user">
        <p className="name">Himanshu</p>
        <img src="src/assets/arrow.png" className="arrow-icon" />
      </div>
    </div>
  );
};
