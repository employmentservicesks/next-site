function Hero() {
  return (
    <section
      className="w-full flex items-center justify-center flex-auto"
      style={{ backgroundImage: "url('/assets/images/bg.jpg')", height: '400px' }}
    >
      <div className="flex flex-col sm:flex-row items-center">
        <img
          width={160}
          height={160}
          src={"/assets/icons/logo.svg"}
          loading="lazy"
        />
        <div className="sm:ml-24 uppercase font-bold max-[640px]:text-center text-2xl sm:text-6xl">
          <span className="max-w-screen-sm">
            службa занятости херсонской области
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
