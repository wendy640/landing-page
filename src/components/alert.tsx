// components/AlertPop.tsx
import { X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import React from "react";

interface AlertPopProps {
	message: string;
	onClose: () => void;
	color: string;
}

export function AlertPop({ message, onClose, color }: AlertPopProps) {
	return (
		<Alert className="fixed top-20 h-20 w-160 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex items-center  space-x-4 z-50">
			<AlertDescription className={`text-black align-center text-lg ${color}`}>
				{message}
			</AlertDescription>
			<X
				onClick={onClose}
				className={`cursor-pointer ${color} -mt-3`}
			/>
		</Alert>
	);
}
