import {IUserContext, UserContext} from "./UserContext";
import {useContext} from "react";
import Row from './Row';


function Contacts() {
    const {phone, email, location} = useContext<IUserContext>(UserContext);
    return (<>
        <Row caption="Телефон" id="phone" value={phone} type="tel"/>
        <Row caption="email" id="email" value={email} type="email"/>
        <Row caption="Местонахождение" id="location" value={location}/>
    </>);
}

export default Contacts;
