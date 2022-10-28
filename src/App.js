import React from "react";
import {Box, Button, Container, FormControl, FormLabel, Heading, HStack, Input, Select, Stack} from "@chakra-ui/react";
import {UpDownIcon} from "@chakra-ui/icons"
import Palette from "./components/Palette";

const MODES = [
    'rgb',
    'lab',
    'lrgb',
    'hsl',
    'lch',
]

function App() {
    const [fg, setFg] = React.useState('#d35e5d')
    const [bg, setBg] = React.useState('#0a064d')
    const [fgMode, setFgMode] = React.useState('lch')
    const [bgMode, setBgMode] = React.useState('lab')
    const handleChange = (setter) => (event) => setter(event.target.value)
    return (
        <Box flex={1} className="App" backgroundColor={bg} color={fg} justifyContent={"center"}>

            <Container maxW={'3xl'}>
                <Stack as={Box} textAlign={"center"} spacing={{base: 8, md: 14}} py={20}>
                    <Heading
                        fontWeight={600}
                        fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}>
                        Create some mad palette
                    </Heading>
                </Stack>
                <HStack spacing={2} w={"100%"}>
                    <FormControl>
                        <FormLabel fontWeight={"bold"}>Foreground</FormLabel>
                        <Input placeholder='#foreground' size='lg' value={fg} onChange={handleChange(setFg)}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight={"bold"}>Foreground Mode</FormLabel>
                        <Select placeholder='Select option' size='lg' value={fgMode} onChange={handleChange(setFgMode)}>
                            {MODES.map((_mode) => <option key={_mode} value={_mode}>{_mode}</option>)}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight={"bold"}>Background</FormLabel>
                        <Input placeholder='#background' size='lg' value={bg} onChange={handleChange(setBg)}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight={"bold"}>Background Mode</FormLabel>
                        <Select placeholder='Select option' size='lg' value={bgMode} onChange={handleChange(setBgMode)}>
                            {MODES.map((_mode) => <option key={_mode} value={_mode}>{_mode}</option>)}
                        </Select>
                    </FormControl>
                    <FormControl alignSelf={"flex-end"} flexGrow={0} width={"auto"}>
                        <Button size={"lg"} onClick={() => {
                            const _fg = fg;
                            const _fgM = fgMode;
                            const _bg = bg;
                            const _bgM = bgMode;
                            setBg(_fg);
                            setFg(_bg);
                            setBgMode(_fgM);
                            setFgMode(_bgM);
                        }}><UpDownIcon transform={"rotate(90deg)"}/></Button>
                    </FormControl>
                </HStack>
            </Container>

            <Palette fgMode={fgMode} bgMode={bgMode} fg={fg} bg={bg} />

        </Box>
    );
}

export default App;
