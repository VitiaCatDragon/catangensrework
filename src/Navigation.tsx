import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Avatar, Flex } from "@chakra-ui/react";

function Navigation() {
    return (
        <nav style={{ paddingTop: "15px", paddingRight: "15px", paddingLeft: "15px", paddingBottom: "15px", background: "#283044" }}>
            <Flex display="flex" justifyContent="space-between" alignItems="center">
                <ButtonGroup spacing="2">
                    <Button as={Link} to="/">Главная</Button>
                    <Button as={Link} to="/seasons">Сезоны</Button>
                    <Button onClick={Wiki}>Вики</Button>
                </ButtonGroup>
                <Avatar size="md" as={Link} to="/profile"/>{''}
            </Flex>
        </nav>
    );
}

function Wiki() {
    window.open("https://wiki.catangens.ru/docs/intro")
}
export default Navigation;