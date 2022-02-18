import { ListGroup, ListGroupItem } from "reactstrap"
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Horoscope from "./horoscope";

export default function Output() {
    const { values, number } = useContext(FormContext)

    return (
        <div>{Object.keys(values !== "") &&
            <div className={`rotate shadow ${values.gender === "female" ? `bg-warning` : `bg-info`} h-100`} style={{ transition: '.5s', borderRadius: `${number}% ${number}% ${number}% ${number}% / ${number}% ${number}% ${number}% ${number}%` }}>
                <div className='p-4 mb-0 text-warning'>
                    <ListGroup flush className='px-0 text-end'>
                        <ListGroupItem className='bg-transparent text-dark px-0 border-0' style={{ marginRight: -number + 40, marginTop: -number, transition: "1s" }}>
                            {/* {values.horoscope.includes("aries") && <Aries className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("taurus") && <Taurus className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("gemini") && <Gemini className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("cancer") && <Cancer className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("leo") && <Leo className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("virgo") && <Virgo className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("libra") && <Libra className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("scorpio") && <Scorpio className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("sagittarius") && <Sagittarius className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("capricorn") && <Capricorn className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("aquarius") && <Aquarius className="shadow rounded-pill" width="180px" />}
                            {values.horoscope.includes("pisces") && <Pisces className="shadow rounded-pill" width="180px" />} */}
                            <Horoscope />
                        </ListGroupItem>


                        <ListGroupItem className='bg-transparent text-dark px-0 text-center display-3 border-0 lh-1 fw-bold text-truncate'>
                            {values.name}
                            <br></br>
                            {values.lastname}
                        </ListGroupItem>
                        <ListGroupItem className='bg-transparent px-0 border-0 text-center mb-4 text-truncate'>
                            <a className='text-dark' href={`mailto:${values.email}`}>{values.email}</a>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        }</div>
    )
}
