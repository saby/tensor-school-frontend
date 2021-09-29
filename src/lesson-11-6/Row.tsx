import {ChangeEventHandler, useCallback, useContext} from "react";
import {UserContext} from "./UserContext";

interface IRowProps {
    caption: string;
    value?: string | Date;
    type?: string;
    id: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Row({id, caption, value, type, onChange}: IRowProps) {
    const { updateUser } = useContext(UserContext);
    const onChangeDefault = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        updateUser({[id]: e.target.value});
    }, [updateUser, id])
    return (
        <div className="User__row">
            <label>{caption}</label>
            <input data-id={id} value={value?.toString()} type={type} onChange={onChange || onChangeDefault}/>
        </div>
    );
}
