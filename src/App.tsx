import {Schedule} from "./components/Schedule.tsx";
import {ClassUnit} from "./utils/interpreter.ts";

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
    },
    {
        name: '演算法的數學解析',
        place: '資107',
        time: [
            {
                day: 2,
                time: 3,
            },
            {
                day: 2,
                time: 4,
            },
            {
                day: 5,
                time: 4,
            }
        ],
    },
    {
        name: "系統軟體設計與實作特論",
        place: "資111",
        time: [
            {
                day: 3,
                time: 7,
            },
            {
                day: 3,
                time: 8,
            },
            {
                day: 3,
                time: 9,
            }
        ],
    },
    {
        name: "業界視角下的資訊安全",
        place: "資105",
        time: [
            {
                day: 5,
                time: 7,
            },
            {
                day: 5,
                time: 8,
            },
        ],
    }
]
function App() {

    return (
        <div style={{
            padding: '20px',
            maxWidth: '800px',
            margin: 'auto',
        }}>
            <Schedule data={data}/>
        </div>
    )
}

export default App
