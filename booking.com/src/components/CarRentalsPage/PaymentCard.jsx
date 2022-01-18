
import style from "./Style.module.css";
import PayButton from "./PayButton";
import { useState } from "react";

export default function PaymentCard({fair}){

    const [cardLink,setCardLink]=useState("https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg");

    const handleCard=(link)=>{
        setCardLink(link)
    }
   
    const token= new Date().getTime();

    return (
        <div className={style.payCard}>
                    <h1 className={style.hTag}>Total Fair: ₹ {fair}</h1>
                    <h3>Check and Pay</h3>
                    <h4>How would you like to pay</h4>
                    <div className={style.btnCard}>
                        {
                            ["https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/amex.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/unionpay.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/diners.svg",   
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/paypal.svg" 
                        ].map((link)=>{
                            return <button onClick={()=>handleCard(link)}>
                                <img src={link} alt="" />
                            </button>
                        })
                        }
                    </div>
                    <div className={style.inputBox}>
                        <div>
                            <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/generic-cc.svg" alt="" />
                            {" "}
                            <img src={cardLink} alt="" />
                            {" "}
                            Pay Card Type
                        </div>
                    </div>
                    <div>
                        <label>Cardholder's name*</label>
                        <div className={style.inputBox}>
                            <input type="text" value="Satya Prakash Mall" placeholder="Card Holder's Name" className={style.input}/>
                        </div>
                    </div>
                    <div>
                        <label>Card Number*</label>
                        <div className={style.inputBox}>
                          <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/generic-cc.svg" alt="" />
                          {" "}
                           <input type="text" value="6070 5045 9083 4550" className={style.input}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label >Expiry Date*</label>
                            <div className={style.inputBox}>
                                <input type="text" value="10 / 2024" placeholder="MM / YY" className={style.input} />
                            </div>
                        </div>
                        <div>
                            <label>CVC*</label>
                            <div className={style.inputBox}>
                                <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/generic-cc.svg" alt="" />
                                {" "}
                                <input type="number" value="322" className={style.input}/>
                            </div>
                        </div>
                    </div>
                    <button className={style.payBtn}>
                        <PayButton token={token}/>
                    </button>
                </div>
    )
}