import React from "react";

const LikeButton: React.FC<{
  isFavorite: boolean;
  onToggle: (toggle: boolean) => void;
}> = ({ isFavorite, onToggle }) => {
  const toggleHandler = () => {
    onToggle(!isFavorite);
  };

  return (
    <span className="material-icons" onClick={toggleHandler}>
      {isFavorite ? "favorite" : "favorite_border"}
    </span>
  );
};

export default LikeButton;
