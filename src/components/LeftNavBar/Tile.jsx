import "./leftNavBar.css";

export const Tile = ({ imgSrc, pageName, currentPage }) => {
  const tileClassName =
    pageName === currentPage ? "tile selected-tile" : "tile";

  return (
    <div className={tileClassName}>
      <img src={imgSrc} className="nav-icon" />
      <p className="page-name">{pageName}</p>
    </div>
  );
};
