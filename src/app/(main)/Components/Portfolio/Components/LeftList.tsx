import {type ReactElement} from 'react'
import Image from "next/image";
import {Title} from "./Title";

export const LeftList = (): ReactElement => {

    return (
        <div className={"pr-18.75"}>
            <Title/>
            <ul className={"grid grid-cols-1 auto-rows-auto"}>
                <Image className={"w-full mb-5.25"} src={"/images/portfolio/photo-1.png"} alt={""} width={529} height={385} />
                <Image className={"ml-auto"} src={"/images/portfolio/photo-3.png"} alt={""} width={323} height={232} />
            </ul>
        </div>
    );
};