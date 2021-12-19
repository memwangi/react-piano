import { VStack } from "@chakra-ui/react";
import { selectKey } from "../../domain/keyboard";
import { notes } from "../../domain/note";
import { Key } from "../Key/Key";

export const Keyboard = () => {
	return (
		<VStack>
			{notes.map(({ midi, type, index, octave }) => {
				const label = selectKey(octave, index);
				return <Key key={midi} type={type} label={label} />;
			})}
		</VStack>
	);
};
