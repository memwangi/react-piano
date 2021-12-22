import React, { FunctionComponent } from "react";
import "./style.css";
import { Link, Text } from "@chakra-ui/react";

export const Footer: FunctionComponent = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<Text fontSize="md" fontWeight="semibold">
				<Link color='blue.500' href="https://mugofolio.vercel.app" isExternal>
					Built by Mugo :)
				</Link>
			</Text>
			<br />
			<Text fontSize="sm">{currentYear}</Text>
		</footer>
	);
};
