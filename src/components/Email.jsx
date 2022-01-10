import { useContext } from "react";

import { StoreContext } from "../store";

function Email(props) {
    const { email, index } = props;

    const store = useContext(StoreContext);

    return (
        <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() =>
                        store.dispatch({
                            type: "toggleRead",
                            payload: {
                                id: email.id,
                                sender: email.sender,
                                title: email.title,
                                starred: email.starred,
                                read: !email.read,
                            },
                        })
                    }
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() =>
                        store.dispatch({
                            type: "toggleStar",
                            payload: {
                                id: email.id,
                                sender: email.sender,
                                title: email.title,
                                starred: !email.starred,
                                read: email.read,
                            },
                        })
                    }
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    );
}

export default Email;
