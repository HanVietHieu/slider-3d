import { useState, useCallback } from "react";
import TableInformation from "./TableInformation/TableInformation";
import Slider from "./Slider/Slider";
import "./HorizontalSlideShow.css";

export default function HorizontalSlideShow({ data = [] }) {
  const [imageActive, setImageActive] = useState(data[0]);

  const handleChooseImage = useCallback((id) => {
    const image = data.find((_inforImage) => _inforImage.id === id);
    setImageActive(image);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Slider Flower Gallery</h1>
      <Slider data={data} handleChooseImage={handleChooseImage} />
      <TableInformation informationImage={imageActive} />
    </div>
  );
}
