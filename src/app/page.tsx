"use client";
import { useState } from "react";
import Nav from "@/components/nav";
import { Input } from "@/components/ui/input";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	const [email, setEmail] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	const handleJoinWaitlist = () => {
		if (email.trim()) {
			console.log("User email:", email);
			alert("You have successfully joined the waitlist");
			setEmail("");
		} else {
			alert("Please enter a valid email address");
		}
	};

	return (
		<main className="p-2 flex flex-col items-center bg-cover bg-center min-h-screen w-full -mt-5 lg:mt-0">
			<Nav />
			<section className="intro flex flex-col items-center text-center mx-4 lg:mx-0">
				<div className="waitlist mt-10 lg:mt-20 bg-[#161616] text-[#F1F7FEB5] rounded-2xl pt-1 pb-1 pl-3 pr-3 flex items-center space-x-3 relative border border-[#4E4E4E]">
					<p className="text-[#F1F7FEB5] text-sm">Waitlist v1</p>
					<span className="text-xl font-bold px-2 absolute left-1/2 transform -translate-x-9 -translate-y-1">
						.
					</span>
					<p className="text-[#F1F7FEB5] text-sm">Coming Soon</p>
				</div>

				<div className="text mt-10 text-white">
					<h1 className="text-4xl lg:text-7xl">
						Your paycheck but
						<span className="hidden lg:inline">
							<br />
						</span>{" "}
						with super powers
					</h1>
					<p className="about mt-8 text-base lg:text-lg text-[#F1F7FEB5]">
						Wagestack is a programmable salary wallet designed for employees
						<span className="lg:inline hidden">
							<br />
						</span>{" "}
						and integrates well with your favorite payroll platforms.
					</p>
				</div>

				<div className="contacts flex items-center space-x-2 mt-10 mb-3  lg:w-auto">
					<div className="relative w-72 md:w-72 lg:w-86">
						<Input
							type="email"
							placeholder="Email"
							className={`pl-10 bg-[#161616] border-[#4E4E4E] ${
								isFocused ? "text-white" : "text-gray-400"
							}`}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
						/>
						<Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
					</div>
				</div>
				<div className="join mb-7 flex justify-center items-center w-72 md:w-72 lg:w-86">
					<Button
						variant="outline"
						size="icon"
						className="w-full h-4 p-5"
						onClick={handleJoinWaitlist}
					>
						Join the waitlist
						<ChevronRight className="h-4 w-4 ml-3" />
					</Button>
				</div>
			</section>

			<div className="next mt-60 lg:mt-20 bg-[#161616] rounded-full p-1 flex items-center justify-center border border-gray border-[#4E4E4E]">
				<p className="flex items-center text-[#F1F7FEB5] space-x-2 text-xs rounded-full ml-2">
					What’s next after 8000 users @wagestack
					<Link href="/read">
						<Button
							size="sm"
							className="read-more ml-5 bg-black rounded-full flex items-center space-x-1 px-2"
						>
							<span className="text-white">Read more</span>
							<ChevronRight className="h-3 w-3 text-white" />
						</Button>
					</Link>
				</p>
			</div>
		</main>
	);
}