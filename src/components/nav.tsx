"use client";
import Image from "next/image";
import logo from "./image/coins-logo.png";

const Nav = () => {
	return (
		<header>
			<nav className="">
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center justify-center w-full">
						<a
							className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
							href=""
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={logo} alt="logo" />
							<p className="text-white">Wagestack</p>
						</a>
					</div>
					<div className="absolute right-0 mr-8">{/* <ModeToggle /> */}</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
