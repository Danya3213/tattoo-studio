import {type ReactElement} from 'react'
import Image from "next/image";

export const Service = ({title, description, src}: {
    title: string;
    description: string;
    src: string;
}): ReactElement => {

    return (
        <li className={"flex flex-col gap-7.5"}>
            <Image src={src} alt={""} width={393} height={400}/>
            <div className={"mb-auto"}>
                <h4 className={"m-title mb-2.5"}>{title}</h4>
                <p className={"paragraph"}>{description}</p>
            </div>
            <button className={"transparent-button flex gap-2.5 items-center uppercase justify-center font-medium"}>Переглянути більше<Image src={"/icons/arrow.svg"} alt={""} width={20} height={20}/></button>
        </li>
    );
};