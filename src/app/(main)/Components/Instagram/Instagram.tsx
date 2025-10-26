import {type ReactElement} from 'react';
import {Title} from "./Components/Title";
import {Container} from "@Components/Container/Container";
import {Button} from "@Components/Button/Button";

export const Instagram = (): ReactElement => {

    return (
        <section>
            <Container className={"flex flex-col items-center"}>
                <Title/>
                <Button coloring={"apple"} inner={"Instagram"} className={"font-bold mx-auto"} />
            </Container>
        </section>
    );
};