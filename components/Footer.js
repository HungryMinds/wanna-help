const Footer = () => {
  return (
    <nav className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl py-6 px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Wanna Help
          </a>
        </div>
        <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
          <span className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline">
            © 2020 HungryMinds
          </span>
        </nav>
      </div>
    </nav>
  );
};

export default Footer;
