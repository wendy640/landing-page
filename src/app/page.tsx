"use client";
import { useState } from "react";
import Nav from "@/components/nav";
import { Input } from "@/components/ui/input";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertPop } from "@/components/alert";
import "./globals.css";

export default function Home() {
	const [email, setEmail] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [popupMessage, setPopupMessage] = useState("");
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [popupColor, setPopupColor] = useState("text-red-500");

	const handleJoinWaitlist = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email.trim() && emailRegex.test(email)) {
			setPopupMessage("You have successfully joined the waitlist");
			setPopupColor("text-green-500");
			setEmail("");
		} else {
			setPopupMessage("Please enter a valid email address");
			setPopupColor("text-red-500");
		}
		setIsPopupVisible(true);
	};

	const closePopup = () => {
		setIsPopupVisible(false);
	};

	return (
		<main className="p-2 flex flex-col items-center bg-cover bg-center min-h-screen w-full mt-40 lg:mt-0">
			<Nav />
			{isPopupVisible && (
				<AlertPop
					message={popupMessage}
					onClose={closePopup}
					color={popupColor}
				/>
			)}
			<section className="intro flex flex-col items-center text-center mx-6 lg:mx-0 -mt-10 lg:-mt-6">
				<div className="waitlist mt-6 lg:mt-40 bg-[#161616] text-[#F1F7FEB5] rounded-full p-1 pl-3 pr-3 flex items-center space-x-3 relative border border-[#4E4E4E]">
					<p className="text-[#F1F7FEB5] text-sm">Waitlist v1</p>
					<span className="text-xl font-bold px-2.5 absolute left-1/2 transform -translate-x-9 -translate-y-1">
						.
					</span>
					<p className="text-[#F1F7FEB5] text-sm">Coming Soon</p>
				</div>
				<div className="text mt-10 text-white">
					<h1
						className="text-4xl lg:text-7xl"
						style={{
							textAlign: "center",
							textShadow:
								"-1px -1px 0px rgba(255, 255, 255, 0.20), 1px 1px 0px rgba(0, 0, 0, 0.10)",
							WebkitTextStrokeWidth: "0.4px",
							WebkitTextStrokeColor: "rgba(255, 255, 255, 0.50)",
							fontFamily: "Inter Display, sans-serif",
							fontWeight: "500",
							letterSpacing: "-1.8px",
							background:
								"linear-gradient(135deg, #FFF 30%, rgba(255, 255, 255, 0.50) 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Your paycheck but
						<span className="hidden lg:inline">
							<br />
						</span>{" "}
						with super powers
					</h1>
					<p
						className="about mt-8"
						style={{
							color: "rgba(241, 247, 254, 0.71)",
							textAlign: "center",
							fontFamily: "Inter Display, sans-serif",
							fontSize: "18px",
							fontWeight: "400",
							lineHeight: "24px",
						}}
					>
						Wagestack is a programmable salary wallet designed for employees
						<span className="lg:inline hidden">
							<br />
						</span>{" "}
						and integrates well with your favorite payroll platforms.
					</p>
				</div>
				<div className="contacts flex items-center space-x-2 mt-10 mb-4 lg:w-auto">
					<div className="relative w-72 md:w-72 lg:w-86">
						<Input
							type="email"
							placeholder="Email"
							className={`pl-10 bg-[#141413] border-[#4E4E4E] ${
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

			<div className="next mt-40 lg:mt-10 bg-[#161616] rounded-full p-1 flex items-center justify-center border border-gray border-[#4E4E4E]">
				<p
					className="flex items-center text-[#F1F7FEB5] space-x-2 text-xs rounded-full ml-2"
					style={{
						display: "inline-flex",
						padding: "7px 7px 7px 15px",
						justifyContent: "center",
						alignItems: "center",
						gap: "2px",
						borderRadius: "90px",
						border: "1px solid rgba(78, 78, 78, 0.00)",
						background: "#141413",
						boxShadow: "0px 10px 12px 0px rgba(25, 25, 25, 0.40)",
						color: "#CCCCCC",
					}}
				>
					What’s next after 8000 users @wagestack
					<Link href="/read">
						<Button
							size="sm"
							className="read-more ml-5 bg-black rounded-full flex items-center space-x-1 px-3"
							style={{
								color: "#FFFFFF",
								background: "#000000",
							}}
						>
							<span className="text-white" style={{ fontSize: "12px" }}>
								Read more
							</span>
							<ChevronRight className="h-3 w-3 text-white" />
						</Button>
					</Link>
				</p>
			</div>
		</main>
	);
}
