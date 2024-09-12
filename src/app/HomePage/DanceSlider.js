import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function DanceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <p>yug</p>
        </div>
        <div>
          <p>ghjbgu</p>
        </div>
        <div>
          <p>gty</p>
        </div>
      </Slider>
    </div>
  );
}

export default DanceSlider;
