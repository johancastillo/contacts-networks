import { useState } from "react"
import ContactCard from "../../components/contact-card/ContactCard"

import data from './contacts.json'
import axios from 'axios'

const Home = () => {
    const [contacts, setContacts] = useState([])

    return (
        <>
            <h1 className="text-center">Home</h1>

            <div className="container">
                <div className="gallery">

                    {
                        data.map(contact => {
                            return (
                                <ContactCard
                                    fullname={contact.fullname}
                                    image={contact.image}
                                    phone={contact.phone}
                                    address={contact.address}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Home
