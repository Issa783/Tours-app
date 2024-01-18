import React, { useState } from "react";
import styles from "../style.module.css"
const Tours = (props) => {
    const[readMore,setReadMore] = useState(false)
    function handleClick(){
        setReadMore(!readMore )
    }
    return (
        <section>
            <div className={styles.singletour}>
                <img src={props.toursdata.image} className={styles.singletourimg}  />
                <footer>
                    <div className={styles.tourinfo}>
                    <h4>{props.toursdata.name}</h4>
                    <h4 className={styles.tourprice}>$ {props.toursdata.price}</h4>
                    </div>
                    <p>{readMore ? props.toursdata.info : `${props.toursdata.info.substring(0,200)}...`}
                    <button onClick={handleClick}>{readMore ? "Show less" : "Read more"}</button>
                    </p>
                    <button
            className={styles.deletebtn}
            onClick={() => props.removeTours(props.toursdata.id)}
          >
            Not Interested
          </button>
                </footer>
            </div>
            
        </section>
    )
}
export default Tours