import {type ReactElement} from 'react'
import Image from "next/image";

export const RightList = (): ReactElement => {

    return (
        <ul className={"grid grid-cols-2 gap-x-12.5 gap-y-6.25 auto-rows-auto content-between"}>
            <div/>
            <Image className={"pl-7.75"} src={"/images/portfolio/photo-2.png"} alt={""} width={287} height={226} />
            <Image src={"/images/portfolio/photo-4.png"} alt={""} width={288} height={477} />
            <Image className={"h-full object-cover"} src={"/images/portfolio/photo-5.png"} alt={""} width={318} height={477} />
        </ul>
    );
};