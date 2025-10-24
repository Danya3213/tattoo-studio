import {type ReactElement} from 'react'
import {Container} from "@Components/Container/Container";
import {Title} from "./Components/Title";
import {Text} from "./Components/Text";
import {FeedbackList} from "./Components/FeedbackList";
import Image from "next/image";

export const About = (): ReactElement => {

    return (
        <section>
            <Container className={"grid grid-cols-2 gap-x-19"}>
                <div className={"flex flex-col"}>
                    <Title/>
                    <Text/>
                    <Image src={"/images/aboutLeft.jpg"} alt={""} width={531} height={289}/>
                </div>
                <div className={"flex flex-col"}>
                    <Image src={"/images/aboutRight.jpg"} alt={""} width={635} height={400}/>
                    <FeedbackList/>
                </div>
            </Container>
        </section>
    );
};