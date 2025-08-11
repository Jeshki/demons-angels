export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 bg-gray-800 text-gray-200">
      <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 p-4 text-center text-sm md:flex-row md:justify-between md:space-y-0">
        <p>© {year} Demons & Archangels</p>
        <div className="space-y-2">
          <div className="flex justify-center space-x-4 md:justify-end">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              Instagram
            </a>
          </div>
          <a
            href="mailto:contact@demonsangels.com"
            className="block hover:underline md:text-right"
          >
            contact@demonsangels.com
          </a>
        </div>
      </div>
    </footer>
  );
}
