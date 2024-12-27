const Banner = () => {
  return (
    <article
      className="banner flex flex-col gap-4 lg:flex-row items-center justify-between text-center py-12 px-3 lg:px-16 bg-gray-800 text-white"
      id="banner"
    >
      <div className="flex flex-col gap-1">
        <h2 className="uppercase font-bold text-xl lg:text-[1.65rem]">
          The World's Largest Online Bookstore
        </h2>
        <p className="text-[17px]">
          Here you can get the Ebooks easily where are available in our stock.
        </p>
      </div>
      <div className="flex gap-4 uppercase font-semibold [&>a]:py-3 [&>a]:px-4">
        <a
          href="#"
          className="bg-gray-600 hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
        >
          Start Now
        </a>
        <a
          href="#"
          className="background-accent__item hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out"
        >
          Buy Now
        </a>
      </div>
    </article>
  );
};

export default Banner;