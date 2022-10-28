import {HStack, VStack} from "@chakra-ui/react";
import PaletteBox from "./PaletteBox";
import {useMemo} from "react";
import chroma from "chroma-js";

const vars = {
    "shadeKeys": [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    "lightDomain": [0, 0.6, 1],
    "darkDomain": [0, 0.4, 1],
    "mode": "lrgb"
}

const {shadeKeys, lightDomain, darkDomain} = vars;

const Palette = ({fgMode, bgMode, fg, bg}) => {

    const colorSchemes = useMemo(() => {
        try {
            return {
                primary: chroma.scale(["black", fg, "white"]).domain(lightDomain).mode(fgMode),
                background: chroma.scale(["black", bg, "white"]).domain(darkDomain).mode(bgMode),
            }
        } catch (e) {
            return {
                primary: chroma.scale(["black", "gray", "white"]).domain(lightDomain).mode(fgMode),
                background: chroma.scale(["black", "gray", "white"]).domain(darkDomain).mode(bgMode),
            }
        }
    }, [fg, bg, bgMode, fgMode]);

    const maxWidth = useMemo(() => {
        const name = Object.keys(colorSchemes).sort((a, b) => b.length - a.length)[0];
        const shade = shadeKeys.sort((a, b) => b.length - a.length)[0];
        return (`${name}.${shade}`.length) + 'em';
    }, [colorSchemes])

    return (
        <VStack flex={1} fontSize={"xs"}>
            <HStack space={2}>
                <PaletteBox prefix={"primary"} color={fg}/>
                <PaletteBox prefix="background" color={bg}/>
            </HStack>
            <HStack space={2} w={"100%"} justifyContent={"center"} p={2}>
                <HStack space={0} p={12} borderRadius={"xl"}>
                    {Object.entries(colorSchemes).map(([prefix, colorSet], indx) => {
                        return <VStack space={1} key={indx} flexGrow={1} maxWidth={maxWidth}>
                            {shadeKeys.map((shadeKey) => (
                                <PaletteBox prefix={prefix} name={shadeKey} key={shadeKey}
                                            color={colorSet(shadeKey / 1000).hex()}/>
                            ))}
                        </VStack>
                    })}
                </HStack>
                <HStack space={0} p={12} backgroundColor={"white"} borderRadius={"xl"}>
                    {Object.entries(colorSchemes).map(([prefix, colorSet], indx) => {
                        return <VStack space={1} key={indx} flexGrow={1} maxWidth={maxWidth}>
                            {shadeKeys.map((shadeKey) => (
                                <PaletteBox prefix={prefix} name={shadeKey} key={shadeKey}
                                            color={colorSet(shadeKey / 1000).hex()}/>
                            ))}
                        </VStack>
                    })}
                </HStack>
                <HStack space={0} p={12} backgroundColor={"black"} borderRadius={"xl"}>
                    {Object.entries(colorSchemes).map(([prefix, colorSet], indx) => {
                        return <VStack space={1} key={indx} flexGrow={1} maxWidth={maxWidth}>
                            {shadeKeys.map((shadeKey) => (
                                <PaletteBox prefix={prefix} name={shadeKey} key={shadeKey}
                                            color={colorSet(shadeKey / 1000).hex()}/>
                            ))}
                        </VStack>
                    })}
                </HStack>
            </HStack>
        </VStack>
    );
};

export default Palette;
