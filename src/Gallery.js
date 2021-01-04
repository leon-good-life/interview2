import classnames from "classnames";
import "./Gallery.css";

const Gallery = ({ picturesList, imgClassName, onImgClick }) => {
  // TODO: ask the backend developer politely to add description. It is important for accesibility.
  return (
    <div>
      {Array.isArray(picturesList) &&
        picturesList.map((picture) => (
          <img
            key={picture.id}
            src={picture.download_url}
            alt={`Author ${picture.author}. There is no description.`}
            className={classnames("gallery", imgClassName)}
            onClick={() => onImgClick(picture)}
          />
        ))}
    </div>
  );
};

export default Gallery;
