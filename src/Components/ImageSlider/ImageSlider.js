import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/img/b4.jpg" },
  { url: "/img/b10.jpg" },
  { url: "/img/b11.jpg" },
  { url: "/img/b12.jpg" },
  { url: "/img/b13.jpg" },
  { url: "/img/b14.jpg" },
  { url: "/img/b2.jpg" },
  { url: "/img/b3.jpg" },
  { url: "/img/b5.jpg" },
  { url: "/img/b6.jpg" },
  { url: "/img/b7.jpg" },
  { url: "/img/b8.jpg" },
  { url: "/img/b9.jpg" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"99%"}
        height={"350px"}
        images={images}
        showNavs={true}
        style={{ zIndex: "3", objectFit: "fill" }}
      />
    </div>
  );
};
export default ImageSlider;
