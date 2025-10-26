"use client"

import {type ReactElement} from 'react'
import {useInteractive} from "@utils/useInteractive";
import {Description} from "./Components/Description";
import {Title} from "./Components/Title";
import Image from "next/image";
import {Button} from "@Components/Button/Button";

export const Service = ({title, description, src}: {
    title: string;
    description: string;
    src: string;
}): ReactElement => {

    const { state, eventHandlers } = useInteractive();

    return (
        <li className={"flex flex-col gap-7.5"}>
            <Image src={src} alt={""} width={393} height={400}/>
            <div className={"mb-auto"}>
                <Title title={title} />
                <Description description={description} />
            </div>
            <Button
                coloring="transparent"
                className="transparent-button flex gap-2.5 items-center uppercase justify-center font-medium"
                {...eventHandlers}
                inner={
                    <>
                        Переглянути більше
                        <div
                            className="relative after:absolute after:h-full after:w-full after:top-0 after:opacity-0 after:left-0 bg-[url(/icons/arrowActive.svg)] bg-center"
                        >
                            <Image src="/icons/arrow.svg" alt="" width={20} height={20} />
                        </div>
                    </>
                }
            />
        </li>
    );
};