import Slider from "react-slick"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SliderMainPage() {
  return (
    <Slider {...settings} className="w-3/4">
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/img1.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/img2.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_1.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_2.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_3.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_4.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_5.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_6.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_7.jpg"
        loading="lazy"
      />
      <img
        alt="служба в армии по контракту"
        src="/assets/images/army/страница_8.jpg"
        loading="lazy"
      />
    </Slider>
  )
}