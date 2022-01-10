import { useState, useReducer } from "react";

import { StoreContext, EmailReducer } from "./store";

import initialEmails from "./data/emails";
import Emails from "./components/Emails";
import Nav from "./components/Nav";
import Header from "./components/Header";

import "./styles/app.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
    const [state, dispatch] = useReducer(EmailReducer, initialEmails);

    let filteredEmails = [...state]

    const [hideRead, setHideRead] = useState(false);
    const [currentTab, setCurrentTab] = useState("inbox");

    if (hideRead) filteredEmails = getReadEmails(filteredEmails);

    if (currentTab === "starred")
        filteredEmails = getStarredEmails(filteredEmails);

    return (
        <div className="app">
            <StoreContext.Provider value={{state: state, dispatch: dispatch}}>
                <Header />
                <Nav
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    hideRead={hideRead}
                    setHideRead={setHideRead}
                />
                <Emails
                    filteredEmails={filteredEmails}
                />
            </StoreContext.Provider>
        </div>
    );
}

export default App;