import { ListGroup, ListGroupItem } from "reactstrap"
import { ReactComponent as Aries } from "../icons/aries.svg";
import { ReactComponent as Taurus } from "../icons/taurus.svg";
import { ReactComponent as Gemini } from "../icons/gemini.svg";
import { ReactComponent as Cancer } from "../icons/cancer.svg";
import { ReactComponent as Leo } from "../icons/leo.svg";
import { ReactComponent as Virgo } from "../icons/virgo.svg";
import { ReactComponent as Libra } from "../icons/libra.svg";
import { ReactComponent as Scorpio } from "../icons/scorpio.svg";
import { ReactComponent as Sagittarius } from "../icons/sagittarius.svg";
import { ReactComponent as Capricorn } from "../icons/capricorn.svg";
import { ReactComponent as Aquarius } from "../icons/aquarius.svg";
import { ReactComponent as Pisces } from "../icons/pisces.svg";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Output() {
    const { values, number } = useContext(FormContext)

    return (
        <div>{Object.keys(values !== "") &&
            <div className={`rotate shadow ${values.gender === "female" ? `bg-warning` : `bg-info`} h-100`} style={{ transition: '.5s', borderRadius: `${number}% ${number}% ${number}% ${number}% / ${number}% ${number}% ${number}% ${number}%` }}>
                <div className='p-4 mb-0 text-warning'>
                    <ListGroup flush className='px-0 text-end'>
                        <ListGroupItem className='bg-transparent text-dark px-0 border-0' style={{ marginRight: -number + 40, marginTop: -number, transition: "1s" }}>
                            {values.horoscope.includes("aries") && <Aries className="shadow rounded-pill" width="180px" />}
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
                            {values.horoscope.includes("pisces") && <Pisces className="shadow rounded-pill" width="180px" />}
                        </ListGroupItem>


                        <ListGroupItem className='bg-transparent text-dark px-0 text-center display-3 border-0 lh-1 fw-bold text-truncate'>
                            {values.name}
                            <br></br>
                            {values.lastname}
                        </ListGroupItem>
                        <ListGroupItem className='bg-transparent px-0 border-0 text-center mb-4'>
                            <a className='text-dark' href={`mailto:${values.email}`}>{values.email}</a>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        }</div>
    )
}
