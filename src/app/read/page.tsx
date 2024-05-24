"use client";
import Nav from "@/components/nav";
import { Input } from "@/components/ui/input";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import user from  "../../components/image/image.png"
export default function Home() {
	return (
		<main className="p-2 flex flex-col items-center bg-cover bg-center min-h-screen w-full lg:mt-0">
			<Nav />
			<section className="intro flex flex-col items-center text-center mx-4 lg:mx-0 mt-20 lg:mt-14">
				<div className="waitlist mt-8 lg:mt-6 bg-[#161616] text-[#F1F7FEB5] rounded-2xl pt-1 pb-1 pl-3 pr-3 flex items-center space-x-3 relative border border-[#4E4E4E]">
					<p className=" date text-[#F1F7FEB5] text-xs lg:text-sm">
						April 11th, 2024
					</p>
				</div>

				<div className="text mt-5 text-white">
					<h1
						className="text-[#D9D9D9] text-lg lg:text-5xl font-display font-medium leading-[64px] lg:leading-[64px] tracking-[1.4px]"
						style={{
							fontFamily: "Inter Display, sans-serif",
							fontStyle: "normal",
							fontWeight: 500,
							letterSpacing: "-1.4px",
						}}
					>
						What's next after 8,000 users
					</h1>
					<p className="about mt-3 lg:mt-0 text-base lg:text-lg text-[#F1F7FEB5]">
						How we got here and where we're going next.
					</p>
				</div>

				<div
					className="waitlist mt-3 bg-transparent text-[#F1F7FEB5] rounded-[90px] pt-0 pb-0 pl-0 pr-2 flex items-center space-x-3 relative border"
					style={{ borderColor: "#494949" }}
				>
					<div className="rounded-full overflow-hidden">
						<Image src={user} alt="user" width={30} height={30} />
					</div>
					<p className="text-[#F1F7FEB5] text-xs lg:text-sm">Nuel Adeleke</p>
				</div>

				<div className="text text-[#F1F7FEB5] text-left max-w-[799px]">
					<div className="paragraph1 flex flex-col items-start ">
						<p className="mt-4 text-xs lg:text-base">
							Since launching publicly ten months ago, we crossed 100,000
							verified users on Resend. Our open source project is already at{" "}
							<span className="underline">12,181 stars</span> on GitHub and{" "}
							<span className="underline">209,339 weekly downloads</span> on
							npm.
						</p>
						<p className="mt-4 text-xs lg:text-base">
							Resend is powering millions of emails sent every month with a
							small team of six people, and <br />
							this is only the beginning.
						</p>
						<p className="mt-4 text-xs lg:text-base">
							Here's a quick recap of our journey so far and what's next.
						</p>
					</div>

					<div className="paragraph2">
						<h3 className="font-semibold text-lg lg:text-xl mt-6 text-white">
							How we got here
						</h3>
						<p className="text-[#F1F7FEB5]  leading-8 mt-2 lg:text-sm">
							Every idea has a story, and ours started in August 2022.
						</p>
					</div>

					<div className="text text-[#F1F7FEB5] text-left max-w-[799px]">
						<h3 className="font-semibold text-lg lg:text-xl mt-6  text-white">
							Aug 2022: Reimagining email
						</h3>
						<p className="mt-4 text-xs lg:text-base">
							Bu and I were using multiple tools for email at both our full-time
							jobs and side projects, but they all felt outdated, slow, and
							built for marketers, not developers.
						</p>

						<p className="mt-4 text-xs lg:text-base">
							We also had to deal with emails landing in the spam folder and
							felt the pain of building a beautiful email template that would
							work the same in every email client.
						</p>
						<p className="mt-4 text-xs lg:text-base">
							So, we started playing with the idea of building the “Stripe of
							Email”.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
