import {IUserContext, UserContext} from "./UserContext";
import {MouseEventHandler, ReactElement, useCallback, useContext, useState} from "react";
import Contacts from "./Contacts";
import Interests from "./Interests";
import Education from "./Education";
import './User.css'

type Tabs = 'contacts' | 'interests' | 'education';

function Content(tab: Tabs): ReactElement {
    const contents: Record<Tabs, ReactElement> = {
        contacts: <Contacts/>,
        interests: <Interests/>,
        education: <Education/>
    }
    return contents[tab];
}

function Tab({selectedTab, children, id}: { selectedTab: string, children: string, id: string }): ReactElement {
    return (<div data-id={id} className={'User__tab ' + (selectedTab === id ? 'User__tab-selected' : '')}>{children}</div>)
}

function User() {
    const {firstName, lastName, patronym, gender, birthdate} = useContext<IUserContext>(UserContext);
    const [selectedTab, setSelected] = useState<Tabs>('contacts');
    const tabClick = useCallback<MouseEventHandler<HTMLElement>>(({ target }) => {
        const HTMLTarget = (target as HTMLElement);
        if (HTMLTarget.classList.contains('User__tab')) {
            const tab = HTMLTarget.getAttribute('data-id') as Tabs;
            if (tab !== selectedTab) {
                setSelected(tab);
            }
        }
    }, [selectedTab, setSelected])
    return (
        <div className="User">
            <div className="User__fio">{`${firstName} ${lastName} ${patronym}`}</div>
            <div className="User__additionalInfo">{gender} {birthdate?.toLocaleDateString('ru')}</div>
            <div className="User__tabs" onClick={tabClick}>
                <Tab id="contacts" selectedTab={selectedTab}>Контакты</Tab>
                <Tab id="interests" selectedTab={selectedTab}>Интересы</Tab>
                <Tab id="education" selectedTab={selectedTab}>Образование</Tab>
            </div>
            <div className="User__info">
                {Content(selectedTab)}
            </div>
        </div>
    )
}

export default User;
