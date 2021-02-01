import { Link } from 'react-router-dom'

const ContactCard = ({ fullname, image, phone, contactId, address }) => {
    return (
        <Link to="/contact-profile">
            <div class="card" style={{ width: '100%' }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">
                        {fullname}
                    </h5>

                    <p class="card-text">
                        Número de teléfono: {phone}
                        <br />
                    Dirección: {address}
                    </p>

                    <a href="#" class="btn btn-primary">
                        Ver perfil
                </a>
                </div>
            </div>
        </Link>
    )
}

export default ContactCard
