class DemoSketch {
    readonly _id: unknown;
    private readonly _createTime: number;
    private _updateTime: number;

    constructor(param: any) {
        this._id = param.id;
        this._createTime = this._updateTime = Date.now();
    }

    getCreateTime(): number {
        return this._createTime;
    }

    protected updateTime(): number {
        this._updateTime = Date.now();
        return this._updateTime;
    }

    private resetUpdateTime() {
        this._updateTime = this._createTime;
    }

    static moduleCaption(): string {
        return 'DemoSketch';
    }
}

export function readonly_test(): string[] {
    return [
    //solution_begin
    '_id', '_createTime'
    //solution_end
    ];
}

export function private_test(): string[] {
    return [
        //solution_begin
        '_createTime', '_updateTime', 'resetUpdateTime'
        //solution_end
    ];
}

export function protected_test(): string[] {
    return [
        //solution_begin
        'moduleCaption', 'updateTime', 'getCreateTime', '_id'
        //solution_end
    ];
}

export function public_test(): string[] {
    return [
        //solution_begin
        '_id', 'getCreateTime', 'moduleCaption'
        //solution_end
    ];
}