import {Meteor} from "meteor/meteor";
import {ContactsCollection} from "./ContactsCollection";
import {check} from "meteor/check";
Meteor.methods({
    'contacts.insert'({name, email, imageUrl}) {
        check(name, String);
        check(email, String);
        check(imageUrl, String);
        if(!name) {
            throw new Meteor.Error("Name is required.");
        }
        return ContactsCollection.insert({name, email, imageUrl, createdAt: new Date() })
    },
    'contact.remove'({contactId}) {
        check(contactId, String);
        ContactsCollection.remove(contactId);
    }
});