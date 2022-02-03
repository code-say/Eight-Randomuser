import React from 'react';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";


const Mycard = ({details}) => {
    return(
        <Card>
            <CardBody className='text-center'>
                <img height="150" width="150"
                className="rounded-circle img-thumnail border-danger"
                src={details.picture?.large}
                />
                {/* {details.gender} */}
                <CardTitle className='text-primary'>
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt />
                    {details.location?.city}
                    <p>{details.phone}</p>
                    Contact: {details.email}
                    <p>Age: {details.dob?.age}</p>
                </CardText>
            </CardBody>
        </Card>
    )
};

export default Mycard;