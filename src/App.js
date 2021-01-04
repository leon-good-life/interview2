import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import PictureModal from "./PictureModal";
import "./App.css";

function App() {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [picturesList, setPicturesList] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((responseJson) => setPicturesList(responseJson))
      .catch((error) => console.error(error)); // TODO: handle error, show friendly error message indication to the user
  }, []);
  const onImgClick = (picture) => setSelectedPicture(picture);
  const onModalClose = () => setSelectedPicture(null);
  return (
    <div>
      {/* TODO: add loading indication to the user */}
      <Gallery {...{ picturesList, onImgClick }} imgClassName="gallery-image" />
      {selectedPicture && (
        <PictureModal {...{ onModalClose }} picture={selectedPicture} />
      )}
    </div>
  );
}

export default App;
