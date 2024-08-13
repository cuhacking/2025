import Marquee from "react-fast-marquee";

export interface ImageDisplayProps {
  image: string;
  alt: string;
}

export const ImageDisplay = (props: ImageDisplayProps) => {
  
  return (
    <img
      className="object-contain max-h-96 rounded-xl mr-12"
      src={props.image}
      alt={props.alt}
    />
  );
};

export const ImageCarousel = () => {
  const images = [
    { src: "cat-test/big1.png", alt: "big1" },
    { src: "cat-test/big2.jpg", alt: "big2" },
  ];

  return (
    <div>
      <Marquee className="-z-10">
        {images.concat(images, images).map((image, index) => (
          <ImageDisplay key={index} image={image.src} alt={image.alt} />
        ))}
      </Marquee>
    </div>
  );
};
