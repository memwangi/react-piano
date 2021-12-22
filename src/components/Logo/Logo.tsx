import { HStack } from "@chakra-ui/react"

export const Logo = () => {
    return (
        <HStack fontSize="4xl">
            <span role="img" aria-label="metal hand emoji">
                🤘
            </span>
            <span role="img" aria-label="musical keyboard emoji">
                🎹
            </span>
            <span role="img" aria-label="musical notes emoji">
                🎶
            </span>
        </HStack>
    )
}