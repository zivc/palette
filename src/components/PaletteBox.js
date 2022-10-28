import {Box, Text} from "@chakra-ui/react";
import chroma from "chroma-js";
import {useMemo} from "react";


const WHITE = chroma("white"),
    BLACK = chroma("black");

const PaletteBox = ({prefix = '', name, color}) => {

    const textColor = useMemo(() => {
        let _textColor = WHITE;
        try {
            _textColor = (chroma.contrast(color, WHITE) >= chroma.contrast(color, BLACK) ? WHITE : BLACK);
        } catch (e) {
            // nothing
        }
        return _textColor.hex();
    }, [color]);

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
