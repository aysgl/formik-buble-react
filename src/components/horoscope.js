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

export default function Horoscope() {
    const { values } = useContext(FormContext)
    return (
        <div>
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
        </div>
    )
}
