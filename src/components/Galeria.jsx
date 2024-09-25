import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./galeria.css";
export function Galeria() {
  const images = [
    {
      original: "./1.jpeg",
    },
    {
      original: "./2.jpeg",
    },
    {
      original: "./3.jpeg",
    },
    {
      original: "./4.PNG",
    },
    {
      original: "./5.PNG",
    },
    {
      original: "./6.PNG",
    },
    {
      original: "./9.PNG",
    },
    {
      original: "./11.PNG",
    },
    {
      original: "./13.PNG",
    },
    {
      original: "./15.PNG",
    },
  ];
  return (
    <div id="galeria">
      <h1>Galeria</h1>
      <ImageGallery items={images} />
      <a href="#inicio">Incio</a>
    </div>
  );
}
