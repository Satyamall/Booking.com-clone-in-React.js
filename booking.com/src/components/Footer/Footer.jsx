import {Link} from "react-router-dom";
import styled from "styled-components"
import style from "./Footer.module.css";

const FooterBox=styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background: rgb(255,255,255);
   align-items: center;
   padding-bottom: 50px;
`;

export default function Footer(){

    return (
       <FooterBox>
            <div className={style.box1}>
                <h3>Save time, save money!</h3>
                <p>Sign up and we'll send the best deals to you</p>
                <div className={style.text}>
                    <div className={style.box}>
                       <input type="text" placeholder="Your email"  className={style.inputBox}/>
                       <button className={style.btn}>Subscribe</button>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Send me a link to get the FREE Booking.com app!</label>
                    </div>
                </div>
            </div>
            <div className={style.box2}>
                <button className={style.btn1}>List your property</button>
            </div>
            <div className={style.box3}>
                <Link className={style.a}>Mobile Version</Link>
                <Link className={style.a}>Manage your bookings</Link>
                <Link className={style.a}>Contact Customer Service</Link>
                <Link className={style.a}>Become an affiliate</Link>
                <Link className={style.a}>Booking.com for Business</Link>
            </div>
           <div className={style.footer}>
           <div>
               <div>
                  <Link className={style.link}>Countries</Link>
               </div>
               <div>
                  <Link className={style.link}>Regions</Link>
               </div>
               <div>
                  <Link className={style.link}>Cities</Link>
               </div>
               <div>
                  <Link className={style.link}>Districts</Link>
               </div>
               <div>
                  <Link className={style.link}>Airports</Link>
               </div>
               <div>
                  <Link className={style.link}>Hotels</Link>
               </div>
               <div>
                  <Link className={style.link}>Places of interest</Link>
               </div>
           </div>
           <div>
               <div>
                <Link className={style.link}>Homes</Link>
               </div>
               <div>
                 <Link className={style.link}>Apartments</Link>
               </div>
               <div>
               <Link className={style.link}>Resorts</Link>
               </div>
               <div>
               <Link className={style.link}>Villas</Link>
               </div>
               <div>
               <Link className={style.link}>Hostels</Link>
               </div>
               <div>
               <Link className={style.link}>B&Bs</Link>
               </div>
               <div>
               <Link className={style.link}>Guest houses</Link>
               </div>
           </div>
           <div>
               <div>
                  <Link className={style.link}>Unique places to stay</Link>
               </div>
               <div>
               <Link className={style.link}>Reviews</Link>
               </div>
               <div>
               <Link className={style.link}>Unpacked: Travel articles</Link>
               </div>
               <div>
               <Link className={style.link}>Travel Communities</Link>
               </div>
               <div>
               <Link className={style.link}>Seasonal and holiday deals</Link>
               </div>
           </div>
           <div>
               <div>
                  <Link className={style.link}>Car hire</Link>
               </div>
               <div>
               <Link className={style.link}>Flight finder</Link>
               </div>
               <div>
               <Link className={style.link}>Restaurant reservations</Link>
               </div>
               <div>
               <Link className={style.link}>Booking.com for Travel Agents</Link>
               </div>
           </div>
           <div>
               <div>
                  <Link className={style.link}>Coronavirus (COVID-19)FAQS</Link>
               </div>
               <div>
               <Link className={style.link}>About Booking.com</Link>
               </div>
               <div>
               <Link className={style.link}>Contact Customer Service</Link>
               </div>
               <div>
               <Link className={style.link}>Partner help</Link>
               </div>
               <div>
               <Link className={style.link}>Careers</Link>
               </div>
               <div>
               <Link className={style.link}>Sustainability</Link>
               </div>
               <div>
               <Link className={style.link}>Press Centre</Link>
               </div>
               <div>
               <Link className={style.link}>Saftey resource centre</Link>
               </div>
               <div>
               <Link className={style.link}>Investor relations</Link>
               </div>
               <div>
               <Link className={style.link}>Terms & Conditions</Link>
               </div>
               <div>
               <Link className={style.link}>Partner dispute</Link>
               </div>
               <div>
               <Link className={style.link}>Privacy & Cookie Statement</Link>
               </div>
               <div>
               <Link className={style.link}>Corporate contact</Link>
               </div>
           </div>
           </div>
           <div className={style.text2}>
              <h4 className={style.h}>Extranet login</h4>
              <p className={style.p}>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
              <p className={style.p}>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
              <div className={style.logo}>
                  <img src="https://t-cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" alt="" />
                  <img src="https://t-cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" alt="" />
                  <img src="https://t-cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" alt="" />
                  <img src="https://t-cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" alt="" />
                  <img src="https://t-cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" alt="" />
                  <img src="https://t-cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" alt="" />
              </div>
           </div>
       </FooterBox>
    )
}