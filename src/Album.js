const Album = ({ album, nextClick, previousClick }) => {
  return (
    <div className="album">
      <h2>{album.band}</h2>
      <h2>{album.album}</h2>
      <button onClick={previousClick}>Previous</button>
      <button onClick={nextClick}>Next</button>
      <img src={album.cover} alt={album.album} />
    </div>
  );
};

export default Album;
