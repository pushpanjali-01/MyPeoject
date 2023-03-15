import React from "react";
import smily from "../../asserts/images/smily.svg"
import "./index.css"
const Popper = () => {
    return (
        <main>
            <section className="popper">
                <div className="popper_content">
                    <p>INSTANT SALE GOING TO START ON 30 MARCH!</p>
                </div>
                <div className="popper_img">
                    <img src={smily} alt="" />
                </div>
            </section>
        </main>
    )
}
export default Popper