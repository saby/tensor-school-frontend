import {IData} from './Data'
import './Table.css'
import SortContext, {Sort, ORDER, ISortContext} from './SortContext';
import {MouseEventHandler, useContext, useState} from "react";

const SORT: Record<Sort, string> = {
    DESC: ' 🠗',
    ASC: ' 🠕',
    '': ''
}

type ID = Exclude<keyof ISortContext, 'changeSort'>;

function Header() {
    const sortContext = useContext(SortContext);
    const { date, name, cost, changeSort } = sortContext;
    const clickHead: MouseEventHandler<HTMLTableRowElement> = (e) => {
        const field = (e?.target as HTMLTableRowElement).getAttribute('data-id') as ID;
        const currentSort = sortContext[field];
        const nextSort = ORDER[currentSort];
        changeSort(field, nextSort);
    }
    return (
        <thead>
            <tr onClick={clickHead}>
                <th data-testid="name" data-id="name">Название{SORT[name]}</th>
                <th data-testid="cost" data-id="cost">Цена{SORT[cost]}</th>
                <th data-testid="date" data-id="date">Дата{SORT[date]}</th>
            </tr>
        </thead>
    )
}

// TODO убрать внутренности
function Row({item}: {item: IData}) {
    const {name, date, cost} = item;
    return (
        <tr>
            <td>{name}</td>
            <td>{cost}</td>
            <td>{date.toLocaleString(['ru'])}</td>
        </tr>
    )
}

type SearchCallback = (search: string) => void;

interface ITableProps {
    data: IData[];
    searchValue: string;
    onSearch: SearchCallback
}

function Table({ data, searchValue, onSearch }: ITableProps) {
    const [prevSearch, setPrevSearch] = useState('');
    return (
        <div className="Table__container">
            <input data-testid="search"
                   placeholder="Найти..."
                   value={searchValue}
                   onChange={(e) => {
                       const value = e.target.value.replace(/[^0-9A-Za-zА-Яа-яЁё]/g, '')
                       if (value !== prevSearch) {
                           setPrevSearch(value);
                           onSearch(value);
                       }
                   }}
            />
            <table>
                <Header/>
                <tbody>
                    {data.map((item) => <Row key={item.id} item={item}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
