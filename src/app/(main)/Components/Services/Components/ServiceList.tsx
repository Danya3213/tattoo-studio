import {type ReactElement} from 'react'
import {LastService} from "./LastService";
import {Service} from "@main/Components/Services/Components/Service/Service";

export const ServiceList = (): ReactElement => {

    const services: {
        title: string,
        description: string,
    }[] = [
        {
            title: "Татуювання",
            description: "Індивідуальна розробка ескізу для кожного клієнта. Консультація майстра перед сеансом."
        },
        {
            title: "Корекція татуювання",
            description: "Допомагаємо приховати невдалі або набридлі татуювання. Розробляємо новий дизайн з урахуванням попереднього малюнка.",
        },
        {
            title: "Пірсинг",
            description: "Професійні послуги з пірсингу тіла з використанням високоякісних матеріалів.",
        },
        {
            title: "Лазерне видалення татуювань",
            description: "Використовуємо сучасне лазерне обладнання, яке мінімізує дискомфорт і забезпечує максимальний результат.",
        },
        {
            title: "Розробка індивідуальних ескізів",
            description: "Індивідуальна розробка ескізу для кожного клієнта. Консультація майстра перед сеансом. ",
        },
    ]

    return (
        <ul className={"grid grid-cols-3 gap-x-7.5 gap-y-10 grid-rows-2"}>
            {services.map((service, index) => {

                return <Service key={index} {...service} src={`/images/service-${index + 1}.png`} />
            })}
            <LastService/>
        </ul>
    );
};