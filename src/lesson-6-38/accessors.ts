// 1
interface IToDoItem {
   caption: string;
   done?: boolean;
}

export type TListItem = string | IToDoItem;

export class ToDo {
   protected _list: IToDoItem[] = [];

   constructor(list?: TListItem[]) {
      this._list = list ? this._getList(list) : [];
   }

   clear(): void {
      this._list = [];
   }

   private _getList(list: TListItem[]): IToDoItem[] {
      if (!Array.isArray(list)) {
         return this._list;
      }
      const added = list.map(item => {
         if (typeof item === 'string') {
            return {
               caption: item, done: false
            };
         }
         if (typeof item === 'object' && item.caption) {
            return {
               caption: item.caption,
               done: item.done || false
            };
         }

         // for tslint fix
         return {caption: ''};
      }).filter(item => item.caption);

      return [...this._list, ...added];
   }

   set done(caption: string) {
      const doneItem = this._list.find(item => item.caption === caption);
      if (doneItem) {
         doneItem.done = true;
      }
   }

   get list(): string[] {
      return this._list.map(item => `${item.caption}, ${(item.done ? '+' : '-')}`);
   }

   set list(list: TListItem[]) {
      this._list = this._getList(list);
   }
}
