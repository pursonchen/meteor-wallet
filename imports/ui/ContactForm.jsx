import React,{useState} from "react";
import {ContactsCollection} from "../api/ContactsCollection";

export const ContactForm = () => {

    const [name, setName ] = useState("");
    const [email, setEmail] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const contactSave = () => {
        ContactsCollection.insert({name, email, imgUrl});
        setImgUrl("");
        setName("");
        setEmail("");

    }

    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id={"email"} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="imgUrl" >ImageUrl</label>
                <input type="text" id={"imgUrl"} value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
            </div>
            <button type={"button"} onClick={contactSave}>Save</button>
        </form>
    );
}