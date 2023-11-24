import { useState } from "react";
import Album from "./Album";
import { albumData } from "./Data";

const Collection = () => {
  const [albumIndex, setAlbumIndex] = useState(0);

  function handleNextClick() {
    setAlbumIndex((index) => (index + 1 >= albumData.length ? 0 : index + 1));
  }

  function handlePreviousClick() {
    setAlbumIndex((index) =>
      index - 1 < 0 ? albumData.length - 1 : index - 1
    );
  }

  return (
    <div>
      <Album
        album={albumData[albumIndex]}
        previousClick={handlePreviousClick}
        nextClick={handleNextClick}
      />
    </div>
  );
};

export default Collection;
