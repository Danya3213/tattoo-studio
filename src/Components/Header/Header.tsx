import {type ReactElement} from 'react'
import {Button} from "@Components/Button/Button";
import {Container} from "@Components/Container/Container";
import {Logo} from "./Components/Logo";
import {Nav} from "./Components/Nav";

export const Header = (): ReactElement => {

    return (
        <header>
            <Container className={"flex items-center justify-between py-6.75"}>
                <Logo/>
                <div className={"flex items-center gap-31.25"}>
                    <Nav/>
                    <Button inner={"Записатися"} coloring={"apple"} />
                </div>
            </Container>
        </header>
    );
};