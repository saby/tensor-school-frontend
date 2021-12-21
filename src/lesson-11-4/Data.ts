export interface IData {
    id: string;
    name: string;
    cost: number;
    date: Date;
}

export const DATA: IData[] = [{
    id: '1',
    name: 'Пылесос Karcher',
    cost: 15_000,
    date: new Date(2021, 8, 21, 14, 11)
}, {
    id: '2',
    name: 'Планшет запчасти',
    cost: 250,
    date: new Date(2021, 8, 23, 13, 53)
}, {
    id: '3',
    name: 'Хозблок',
    cost: 76000,
    date: new Date(2021, 8, 23, 17, 8)
}, {
    id: '4',
    name: 'Холодильник',
    cost: 7500,
    date: new Date(2021, 8, 23, 15, 23)
}, {
    id: '5',
    name: 'Airpods',
    cost: 16000,
    date: new Date(2021, 8, 23, 16, 28)
}, {
    id: '6',
    name: '1-к квартира',
    cost: 10000,
    date: new Date(2021, 8, 22, 16, 22)
}, {
    id: '7',
    name: 'Электроплитка',
    cost: 600,
    date: new Date(2021, 8, 22, 13, 41)
}, {
    id: '8',
    name: 'Автолюлька',
    cost: 2000,
    date: new Date(2021, 8, 22, 16, 40)
}, {
    id: '9',
    name: 'Кирпич',
    cost: 9000,
    date: new Date(2021, 8, 22, 13, 47)
}]
