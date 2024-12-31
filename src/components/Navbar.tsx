import Link from "next/link";


export default function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-pink-500 to-purple-600 py-4 px-4 text-white shadow-md width[100vw]">
        <div className="container mx-auto py-3 flex justify-between items-center ">
          <div className="text-xl font-bold font-serif">Genetic Insights</div>
          <ul className="flex ">
            <li>
              <Link href="/">
                <span className="px-4 py-2 hover:bg-pink-700 rounded cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              {/* <Link href="/about">
                <span className=" py-2 hover:bg-pink-700 rounded cursor-pointer">About</span>
              </Link> */}
            </li>
            <li>
              <Link href="/blogsPage">
                <span className=" px-4 py-2 hover:bg-pink-700 rounded cursor-pointer">Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="px-4 py-2 hover:bg-pink-700 rounded cursor-pointer">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }