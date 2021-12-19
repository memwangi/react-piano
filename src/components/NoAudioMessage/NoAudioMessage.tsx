import { Box, Text } from "@chakra-ui/react";

export const NoAudioMessage = () => {
	return (
		<Box>
			<Text fontSize="md">Sorry, it's not gonna work</Text>

			<Text fontSize="md">
				Seems like your browser doesn't support <code>Audio API</code>
			</Text>
		</Box>
	);
};
