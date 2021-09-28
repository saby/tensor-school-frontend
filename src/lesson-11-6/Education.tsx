import {IUserContext, IUserData, UserContext} from "./UserContext";
import {ChangeEventHandler, ReactElement, useCallback, useContext} from "react";
import Row from './Row';

const dateAdapter = {
    toValue(date?: Date): string {
        if (date) {
            const [day, month, year] = date.toLocaleDateString('ru').split('.');
            return `${year}-${month}-${day}`;
        }
        return '';
    },
    fromValue(value: string): Date | null {
        if (value) {
            return new Date(Date.parse(value));
        }
        return null;
    }
}

function Block(props: { data: IUserData['school'], prop: 'school' | 'university', section: string; }): ReactElement {
    const { data, prop, section } = props;
    const { name, address, startDate, finishDate } = data;
    const { updateUser } = useContext(UserContext);

    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        const id = e.target.getAttribute('data-id') as keyof IUserData['school'];
        let {value}: { value: string | Date | null } = e.target;
        if (id.match('Date')) {
            value = dateAdapter.fromValue(value);
        }

        updateUser({
            [prop]: {
                ...data,
                [id]: value
            }
        });
    }, [data, updateUser, prop])

    return (
        <>
            <h3>{section}</h3>
            <Row caption="Название" id="name" value={name} onChange={onChange}/>
            <Row caption="Адрес" id="address" value={address} onChange={onChange}/>
            <Row caption="Дата начала" id="startDate" value={dateAdapter.toValue(startDate)} type="date" onChange={onChange}/>
            <Row caption="Дата окончания" id="finishDate" value={dateAdapter.toValue(finishDate)} type="date" onChange={onChange}/>
        </>
    );
}

function Education() {
    const {school, university, updateUser} = useContext<IUserContext>(UserContext);
    const {specialization} = university as IUserData['university'];

    const updateSpecialization = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
        updateUser({ university: {
                ...university,
                specialization: e.target.value
            }
        })
    }, [updateUser, university]);

    return (
        <>
            <Block section="Школа" prop="school" data={school as IUserData['school']}/>
            <Block section="Университет" prop="university" data={university as IUserData['school']}/>
            <Row caption="Специализация" id="specialization" value={specialization} onChange={updateSpecialization}/>
        </>
    );
}

export default Education;
