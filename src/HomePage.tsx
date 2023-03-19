import React from "react";
import {Box, Heading, Text, Button, Flex, ButtonGroup, Stack} from "@chakra-ui/react"
import { FaDollarSign, FaBars, FaDiscord } from 'react-icons/fa'

function HomePage() {
    return (
        <Flex paddingLeft="250px" paddingTop="0px" bg="#283044" minH="190vh" flexDirection="column">
            <Stack alignItems="left" justify="left" paddingTop="350px" display="flex" direction="column">
                <Box maxW='32rem'>
                    <Heading size="4xl" mb={4} color="#ffffff">Catangens</Heading>
                    <Text fontSize='xl' fontWeight="500" color="#ffffff">
                        Приватный сервер, без донатов и приватов
                    </Text>
                    <ButtonGroup spacing="2">
                        <Button height="45px" width="208px" colorScheme='orange' variant="solid" leftIcon={<FaDollarSign />} mt='24px' onClick={BuyPass}>
                            Купить доступ
                        </Button>
                        <Button
                            height="45px"
                            width="208px"
                            colorScheme="whiteAlpha"
                            variant="solid"
                            leftIcon={<FaBars />}
                            mt="24px"
                            >
                            Подробнее
                        </Button>
                    </ButtonGroup>
                </Box>
            </Stack>
            <Stack>
                <Box maxW='1250' paddingTop="350px">
                    <Stack spacing="20">
                        <Heading size='4xl' fontWeight='700' color='#ffffff'>
                            Почему мы?
                        </Heading>

                        <Heading paddingLeft="125px" size="xl" fontWeight='600' color='#ffffff'>
                            • Времена года
                        </Heading>
                    </Stack>
                    <Box paddingLeft="125px" paddingTop="15px">
                        <Text fontSize="2xl" fontWeight="500" color='#ffffff'>
                            Цветовая гамма мира вам надоела?
                            У нас есть времена года с температурой, которые меняют геймплей и
                            добавляют веселья на сервере.
                        </Text>
                    </Box>

                    <Stack textAlign="right" justify-content="right">
                        <Heading paddingLeft="125px" paddingTop="50px" size="xl" fontWeight='600' color='#ffffff'>
                            • Уникальные плагины
                        </Heading>
                        <Box paddingLeft="125px" paddingTop="15px">
                            <Text fontSize="2xl" fontWeight="500" color='#ffffff'>
                                На нашем сервере имеются собственные плагины, аналоги которым вы найти не сможете.
                            </Text>
                        </Box>
                    </Stack>

                    <Stack>
                        <Heading paddingLeft="125px" paddingTop="50px" size="xl" fontWeight='600' color='#ffffff'>
                            • Города
                        </Heading>
                        <Box paddingLeft="125px" paddingTop="15px">
                            <Text fontSize="2xl" fontWeight="500" color='#ffffff'>
                                Игроки могут создавать свои города и вступать в уже созданные
                            </Text>
                        </Box>
                    </Stack>

                    <Stack textAlign="right" justify-content="right">
                        <Heading paddingLeft="125px" paddingTop="50px" size="xl" fontWeight='600' color='#ffffff'>
                            • В ногу со временем
                        </Heading>
                        <Box paddingLeft="125px" paddingTop="15px">
                            <Text fontSize="2xl" fontWeight="500" color='#ffffff'>
                                Мы создаем сайт, чтобы игрокам было комфортнее играть. Ведь согласитесь,
                                легче делать все на одном сайте, чем через команды в игре?
                            </Text>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            <ButtonGroup paddingTop="65" spacing="3">
                <Button
                    height="45px"
                    width="675px"
                    colorScheme='orange'
                    variant="solid"
                    leftIcon={<FaDollarSign />}
                    mt='24px'
                    onClick={BuyPass}>
                Купить проходку
                </Button>
                <Button
                    height="45px"
                    width="675px"
                    colorScheme="messenger"
                    variant="solid"
                    leftIcon={<FaDiscord />}
                    mt="24px"
                    onClick={Discord}>
                Сервер в Discord
                </Button>
            </ButtonGroup>
        </Flex>
    );
}

function BuyPass() {
    window.open("https://store.catangens.ru/")
}

function Discord() {
    window.open("https://discord.gg/D5Wyvgc6qg")
}
export default HomePage;