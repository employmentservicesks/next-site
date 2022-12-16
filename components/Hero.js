function Hero() {
  return (
    <section
      className="w-full h-96 flex items-center justify-center flex-auto"
      style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
    >
      <div className="flex items-center">
        <img
          width={160}
          height={160}
          src={"/assets/icons/logo.svg"}
          loading="lazy"
        />
        <div className="ml-24 uppercase text-white text-6xl">
          <span className="max-w-screen-sm">
            службa занятости херсонской области
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
