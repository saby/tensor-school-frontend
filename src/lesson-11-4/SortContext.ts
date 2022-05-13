import React from 'react';

export type Sort = 'ASC' | 'DESC' | '';
export interface ISortFields {
    date: Sort;
    name: Sort;
    cost: Sort;
}
interface ISortContextCallback {
    changeSort: (name: string, sort: Sort) => void;
}

export interface ISortContext extends ISortFields, ISortContextCallback {}

export const ORDER: Record<Sort, Sort> = {
    ASC: 'DESC',
    DESC: '',
    '': 'ASC'
};

const SortContext = React.createContext<ISortContext>({ date: '', name: '', cost: '', changeSort() {} });
export default SortContext;
