// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Brain, Menu, X } from "lucide-react";
// import clsx from "clsx";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-black backdrop-blur-sm border-b border-gray-900 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
//             <Brain className="w-5 h-5 text-white" />
//           </div>
//           <span className="text-xl font-bold text-black">FitMentor</span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link href="#features" className="text-gray-600 hover:text-gray-100 transition-colors">
//             Features
//           </Link>
//           <Link href="/progress" className="text-gray-600 hover:text-gray-100 transition-colors">
//             Track Progress
//           </Link>
//         </nav>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center space-x-3">
//           <Link
//             href="/signup"
//             className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-white px-5 py-2 rounded-lg"
//           >
//             Sign up
//           </Link>
//           <Link
//             href="/login"
//             className="hidden md:inline-block bg-white text-blue-600 px-5 py-2 rounded-lg"
//           >
//             Login
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-gray-700 dark:text-white"
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={clsx(
//           "md:hidden transition-all duration-300 overflow-hidden",
//           menuOpen ? "max-h-screen" : "max-h-0",
//         )}
//       >
//         <nav className="bg-white dark:bg-gray-900 px-4 py-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
//           <Link href="#features" className="block text-gray-700 dark:text-gray-300">
//             Features
//           </Link>
//           <div className="flex flex-col space-y-2 pt-2">
//             <Link
//               href="/signup"
//               className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm hover:from-purple-700 hover:to-blue-700"
//             >
//               Sign up
//             </Link>
//             <Link
//               href="/login"
//               className="hidden md:inline-block bg-white text-blue-600 px-5 py-2 rounded-lg"
//             >
//               Login
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

// //

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logoLight from "../../../public/images/logo/logo-no-circle-light.png";
export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <div className="h-14 w-14 relative">
            <Image src={logoLight} alt="logo" />
          </div>
          <p className="text-xxl text-white font-semibold">Stellora</p>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
