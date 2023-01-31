import React from "react";
import {useTracker} from "meteor/react-meteor-data";
import {ContactsCollection} from "../api/ContactsCollection";

export const ContactList = () => {

    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    });

    return(
            <>
                <h3>Contact List</h3>
                <ul>
                    {contacts.map((item) =>
                        <li>{item.name}--{item.email}</li>
                    )}
                </ul>
            </>


    );
}