import Table from './Table'
import {DATA, IData} from './Data';
import './App.css'
import {useCallback, useRef, useState} from 'react';
import SortContext, {ISortContext, ISortFields, Sort} from './SortContext';

const SORT_MULTIPLIER: Record<Sort, number> = {
    'ASC': 1,
    'DESC': -1,
    '': 0
}

const EMPTY_SORT: ISortFields = {
    date: '',
    name: '',
    cost: ''
}

// TODO убрать
function filterData(search: string) {
    return [...DATA].filter(({name }) => name.toLowerCase().search(search.toLowerCase()) !== -1);
}

function App() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState(DATA);
    const searchRef = useRef(search);
    const [sort, setSort] = useState<ISortContext>({
        ...EMPTY_SORT,
        changeSort(name: string, sortValue: Sort): void {
            const newSort = {...EMPTY_SORT, changeSort: sort.changeSort, [name]: sortValue}
            // TODO убрать
            setSort(newSort)
            setData(sortData(filterData(searchRef.current), newSort));
            // TODO END убрать
        }
    })


    const sortData = useCallback((data: IData[], sort: ISortContext) => {
        // TODO убрать
        return data.sort((a, b) => {
            const compare = (field: keyof ISortFields) => {
                if (sort[field]) {
                    return a[field] < b[field] ? -SORT_MULTIPLIER[sort[field]] : SORT_MULTIPLIER[sort[field]];
                } else {
                    return 0;
                }
            }
            return compare('date') + compare('name') + compare('cost')
        });
        // TODO END убрать
    }, []);

    const onSearch = useCallback((searchString: string) => {
        // TODO убрать
        setData(sortData(filterData(searchString), sort));
        setSearch(searchString);
        // TODO END убрать
        searchRef.current = searchString;

    }, [sort, sortData])

    return (
        <div className="App">
            <SortContext.Provider value={sort}>
                {/* TODO убрать атрибуты */}
                <Table data={data} searchValue={search} onSearch={onSearch}/>
            </SortContext.Provider>
        </div>
    );
}

export default App;
