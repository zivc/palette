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

    const {primary, background} = useMemo(() => {
        return {
            primary: chroma.scale(["black", fg, "white"]).domain(lightDomain).mode(fgMode),
            background: chroma.scale(["black", bg, "white"]).domain(darkDomain).mode(bgMode),
        }
    }, [fg, bg, bgMode, fgMode]);

    return (
        <VStack flex={1} fontSize={"xs"}>
            <HStack space={2}>
                <PaletteBox prefix={"primary"} color={fg}/>
                <PaletteBox prefix="background" color={bg}/>
            </HStack>
            <HStack space={2} w={"100%"} justifyContent={"space-evenly"} p={2}>
                {Object.entries({primary, background}).map(([prefix, colorSet], indx) => {
                    return <VStack space={1} key={indx} flexGrow={1}>
                        {shadeKeys.map((shadeKey) => (
                            <PaletteBox prefix={prefix} name={shadeKey} key={shadeKey}
                                        color={colorSet(shadeKey / 1000).hex()}/>
                        ))}
                    </VStack>
                })}
                <HStack space={0} flexGrow={1} p={2} backgroundColor={"white"} borderRadius={"xl"}>
                    {Object.entries({primary, background}).map(([prefix, colorSet], indx) => {
                        return <VStack space={1} key={indx} flexGrow={1}>
                            {shadeKeys.map((shadeKey) => (
                                <PaletteBox prefix={prefix} name={shadeKey} key={shadeKey}
                                            color={colorSet(shadeKey / 1000).hex()}/>
                            ))}
                        </VStack>
                    })}
                </HStack>
                <HStack space={0} flexGrow={1} p={2} backgroundColor={"black"} borderRadius={"xl"}>
                    {Object.entries({primary, background}).map(([prefix, colorSet], indx) => {
                        return <VStack space={1} key={indx} flexGrow={1}>
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
