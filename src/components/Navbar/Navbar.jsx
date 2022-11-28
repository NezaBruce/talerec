import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className="sticky top-0 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900
         dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/76"
      >
        <div className="max-w-8xl mx-auto">
          <div className="py-3  border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-1 lg:mx-0">
            <div className="relative flex items-center">
              <a
                href="/"
                className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              >
                <span class="sr-only">Limos</span>
                <img
                  className="h-12 w-12 rounded-full"
                  src="../../../business-class.svg"
                  alt="limos"
                />
              </a>
              <div className="relative lg:flex items-center ml-auto">
                <nav className="tex-sm leading-6 font-bold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        New
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/?ref=top"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Used
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Sell yours
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Top Brands
                      </a>
                    </li>
                    <li className="pl-64">
                      <a
                        href="/"
                        className="hover:text-sky-500 text-black dark:hover:text-sky-400"
                      >
                        Sign in
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <button
                type="button"
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300
"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


{/* <div class="relative inline-block text-left"> */}
//   <div>
//     <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
//       Options
//       <!-- Heroicon name: mini/chevron-down -->
//       <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//       </svg>
//     </button>
//   </div>

  {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
    </div>
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
    </div>
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
    </div>
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
    </div>
  </div>
</div> */}