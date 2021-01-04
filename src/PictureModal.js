import "./PictureModal.css";

const PictureModal = ({ picture, onModalClose }) => {
  return (
    <div className="modal">
      <button onClick={onModalClose} className="close-button">
        Close
      </button>
      <img
        key={picture.id}
        src={picture.download_url}
        alt={`Author ${picture.author}. There is no description.`}
        className="picture"
      />
    </div>
  );
};

export default PictureModal;
