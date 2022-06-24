import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { pagesPath } from "src/lib/$path";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
// const items = [
//   { href: pagesPath.$url().pathname, label: "Root" },
//   { href: pagesPath.about.$url().pathname, label: "About" },
// ];

/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="p-0 m-0 w-full h-112px bg-white">
      <div
        className="flex justify-between items-center mx-auto h-full"
        style={{ width: "min(92%, 1166px)" }}
      >
        <div>
          <Link href="/">
            <a>
              <Image
                src="/img/logo.svg"
                width={135}
                height={26}
                className="block"
              />
            </a>
          </Link>
        </div>
        <div>
          <button className="p-0 text-gray-500 bg-transparent border-none outline-none cursor-pointer">
            <FontAwesomeIcon icon={faBars} className="m-8px w-20px h-20px" />
          </button>
        </div>
      </div>
    </header>
  );
};
