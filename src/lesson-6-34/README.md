# Интерфейсы

1. Найдите и исправьте ошибку в данных константы `data` в функции `getPerson`
```TypeScript
export function getPerson(): Person {
    const data = {
        name: 'Petr',
        secondName: 'Smith',
        age: '7'
    };
    return new Person(data);
} 
```

2. Допишите функцию getStudentsData так, чтобы она возвращала указанные в комментарии данные в массиве в соответствии с интерфейсом 
```TypeScript
export function getStudentsData(): IStudentData[] {
    /**
     * Данные студентов которые нужно передать:
     *
     * 1. Ivan Petrov 20 лет +7(555)555-55-50
     * 2. Stepan Petrov 19 лет +7(555)555-55-51
     * 3. Pert Ivanov 19 лет
     *
     */
}
```