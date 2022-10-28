import {Box, Text} from "@chakra-ui/react";
import chroma from "chroma-js";


const WHITE = chroma("white"),
    BLACK = chroma("black");

const PaletteBox = ({prefix = '', name, color}) => {
    const textColor = (chroma.contrast(color, WHITE) >= chroma.contrast(color, BLACK) ? WHITE : BLACK).hex()
    return (
        <Box p={4} bgColor={color} width={"100%"}>
            <Text color={textColor}>
                <b>{prefix}{name ? `.${name}` : ''}</b><br />
                <small>BG: {color.toUpperCase()}<br />
                    FG: {textColor.toUpperCase()}</small>
            </Text>
        </Box>
    );
};

export default PaletteBox;
