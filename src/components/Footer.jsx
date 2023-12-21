import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div>
        <footer className="bg-gray-100 dark:bg-gray-900">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600 dark:text-teal-300 text-3xl font-bold">
              TaskMaster
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                >
                  History
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="text-xl" />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="text-xl" />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="text-xl" />
                </Link>
              </li>

              <li>
                <Link
                  to="https://github.com/shakib2123"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="text-xl" />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                  <span className="sr-only">Dribbble</span>
                  <FaDribbble className="text-xl" />
                </Link>
              </li>
            </ul>

            <p className="mx-auto mt-6 max-w-lg text-center leading-relaxed text-gray-500 dark:text-gray-400">
              TaskMaster: Streamline tasks, boost productivity. Your path to
              efficiency starts here. © 2023 TaskMaster. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;