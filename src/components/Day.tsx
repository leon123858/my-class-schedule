import {Timeline, Tooltip} from 'antd';
import {ClassItem} from "../utils/interpreter";

const timeNumber2String: {
    [key: number]: string;
} = {
    0: '07:10 ~ 08:00',
    1: '08:10 ~ 09:00',
    2: '09:10 ~ 10:00',
    3: '10:20 ~ 11:10',
    4: '11:20 ~ 12:10',
    5: '12:20 ~ 13:10',
    6: '13:20 ~ 14:10',
    7: '14:20 ~ 15:10',
    8: '15:30 ~ 16:20',
    9: '16:30 ~ 17:20',
};

export function Day({
                        items,
                    }: {
    items: ClassItem[];
}) {
    return (
        <Timeline
            mode="left"
            items={items.map(({name, time, isClass, place}: ClassItem) => {
                return {
                    label: timeNumber2String[time],
                    children: (
                        <Tooltip title={place}>
                            {name}
                        </Tooltip>
                    ),
                    color: isClass ? 'blue' : 'gray',
                };
            })}
        />
    );
}