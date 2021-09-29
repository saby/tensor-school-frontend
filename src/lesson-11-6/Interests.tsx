import {IUserContext, UserContext} from "./UserContext";
import {useContext} from "react";
import Row from './Row';

function Interests() {
    const {work, hobby, music, films, books, games, about} = useContext<IUserContext>(UserContext);
    return (<>
        <Row caption="Обо мне" id="about" value={about} type="text"/>
        <Row caption="Работа" id="work" value={work} type="text"/>
        <Row caption="Хобби" id="hobby" value={hobby} type="text"/>
        <Row caption="Музыка" id="music" value={music} type="text"/>
        <Row caption="Фильмы" id="films" value={films} type="text"/>
        <Row caption="Книги" id="books" value={books} type="text"/>
        <Row caption="Игры" id="games" value={games} type="text"/>
    </>);
}

export default Interests;
