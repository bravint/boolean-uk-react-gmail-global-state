import Email from "./Email";

function Emails(props) {
    
    const { filteredEmails } = props;

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email email={email} index={index} />
                ))}
            </ul>
        </main>
    );
}

export default Emails;
