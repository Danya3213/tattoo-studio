import {type ReactElement} from 'react'
import {Container} from "@Components/Container/Container";
import {Title} from "./Components/Title";
import {Text} from "./Components/Text";
import {ServiceList} from "./Components/ServiceList";

export const Services = (): ReactElement => {

    return (
        <section>
            <Container>
                <div className={"flex justify-between mb-15"}>
                    <Title/>
                    <Text/>
                </div>
                <ServiceList/>
            </Container>
        </section>
    );
};