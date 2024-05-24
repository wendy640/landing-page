"use client";
import Image from "next/image";
import logo from "./image/coins-logo.png";
import word from "./image/Word.png";

const Nav = () => {
	return (
		<header className="fixed top-0 left-0 right-0 flex flex-col items-center w-full max-w-[1440px] px-[4%] pb-[2px] pt-0 border-b border-white/10 bg-black/50 backdrop-blur-[2px] z-50">
			 <nav className="w-full flex items-center justify-between mt-4 lg:mt-4 mb-2 lg:mb-1">
       
				<div className="flex items-center justify-center w-full">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-4 lg:p-0"
						href=""
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src={logo} alt="logo" />
						<Image src={word} alt="word" />
					</a>
				</div>
				<div className="absolute right-0 mr-4 lg:mr-8">
					{/* <ModeToggle /> */}
				</div>
			</nav>
		</header>
	);
};

export default Nav;
