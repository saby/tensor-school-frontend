/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство 'gender' содержит значение 'female'), то из этого объекта
  необходимо удалить свойство 'age', если оно есть.
  Если этот человек является мужчиной (свойство 'gender' содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить 
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data: object): object {
  let result = {...data};
  if (result.gender === 'female' && result.hasOwnProperty('age')) {
    delete result.age;
  }
  if (result.gender === 'male' && !result.hasOwnProperty('income')) {
    result.income = 100000;
  }
  return result;
}


/*
  В функцию objectFields приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFields(obj1: object, obj2: object, obj3: object): string[] {
  let total = Object.keys(obj1);
  total = total.concat(Object.keys(obj2));
  total = total.concat(Object.keys(obj3));
  return total.sort();
}


/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj: object, count: number): object[] {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push({...obj});
    result[i].id = i;
  }
  return result;
}
