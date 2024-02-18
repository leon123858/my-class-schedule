import type {TabsProps} from 'antd';
import {Tabs} from 'antd';
import {useEffect, useState} from "react";
import {ClassUnit, interpret} from "../utils/interpreter.ts";
import {Day} from "./Day.tsx";

const data: ClassUnit[] = [
    {
        name: '分散式系統',
        place: '資105',
        time: [
            {
                day: 1,
                time: 6,
            },
            {
                day: 1,
                time: 7,
            },
            {
                day: 1,
                time: 8,
            },
        ],
    }
]

export const Schedule = () => {
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
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: '週三',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: '週四',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '5',
            label: '週五',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '6',
            label: '週末',
            children: 'Content of Tab Pane 3',
        },
    ];
    useEffect(() => {
        // 確認今天星期幾
        const today = new Date().getDay();
        // 週一到週五的 index 分別是 1 到 5
        if (today === 0 || today === 6) {
            setActiveKey('6');
        }
        setActiveKey(String(today));
    }, []);
    return <Tabs activeKey={activeKey} items={items}/>;
};