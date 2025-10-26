import {type ReactElement} from 'react'
import {Container} from "@Components/Container/Container";
import {LeftList} from './Components/LeftList'
import {RightList} from './Components/RightList'
import {Button} from "@Components/Button/Button";

export const Portfolio = (): ReactElement => {

    return (
        <section>
            <Container>
                <div className={"grid grid-cols-2 grid-rows-1 mb-7.5"}>
                    <LeftList/>
                    <RightList/>
                </div>
                <Button coloring={"transparent"} inner={"Переглянути все"} className={"mr-auto"} />
            </Container>
        </section>
    );
};