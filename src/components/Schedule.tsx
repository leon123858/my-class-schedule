import type {TabsProps} from 'antd';
import {Tabs} from 'antd';
import {useEffect, useState} from "react";
import {ClassUnit, interpret} from "../utils/interpreter.ts";
import {Day} from "./Day.tsx";

export const Schedule = ({data}: {
    data: ClassUnit[];
}) => {
    const [activeKey, setActiveKey] = useState('1');
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '週一',
            children: <Day items={interpret(data, 1)}/>,
        },
        {
            key: '2',
            label: '週二',
            children: <Day items={interpret(data, 2)}/>,
        },
        {
            key: '3',
            label: '週三',
            children: <Day items={interpret(data, 3)}/>,
        },
        {
            key: '4',
            label: '週四',
            children: <Day items={interpret(data, 4)}/>,
        },
        {
            key: '5',
            label: '週五',
            children: <Day items={interpret(data, 5)}/>,
        },
    ];
    useEffect(() => {
        // 確認今天星期幾
        const today = new Date().getDay();
        // 週一到週五的 index 分別是 1 到 5
        if (today === 0 || today === 6) {
            setActiveKey('1');
        }
        setActiveKey(String(today));
    }, []);
    return <Tabs activeKey={activeKey} items={items} onChange={(e)=>{
        setActiveKey(e);
    }}/>;
};