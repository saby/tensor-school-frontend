import {UserContext, IUserContext, IUserData} from "./UserContext";
import {useState} from "react";
import User from "./User";
import './App.css'

function App() {
    const [userData, setData] = useState<IUserContext>(() => ({
        about: "человек",
        birthdate: new Date(1997, 5, 13),
        books: "дюна",
        email: "myemail@mail.com",
        films: "дюна",
        firstName: "Иванов",
        games: "Ведьмак",
        gender: 'мужской',
        hobby: "реверс-инжиниринг",
        lastName: "Иван",
        location: "г. Ярославль",
        music: "mood music",
        patronym: "Иванович",
        phone: "+701234567890",
        school: {
            name: '322',
            address: 'Ярославль, ул. Пушкина д. Колотушкина',
            startDate: new Date(2004, 8),
            finishDate: new Date(2015, 4)
        },
        university: {
            name: 'ЯрГУ им.П.Г.Демидова',
            address: 'Ярославль, ул. Союзная 144',
            startDate: new Date(2015, 8),
            finishDate: new Date(2019, 7, 31),
            specialization: 'Компьютерные науки'
        },
        work: "Тензор",
        updateUser(updateUserData: Partial<IUserData>): void {
            setData((userData) => ({...userData, ...updateUserData}))
        }
    }))

    return (
        <div className="App">
            <UserContext.Provider value={userData}>
                <User/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
