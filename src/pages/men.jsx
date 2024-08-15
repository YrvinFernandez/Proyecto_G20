import React from "react";
import Men1 from "../assets/men/men1.png"
import Men2 from "../assets/men/men2.png"
import Men3 from "../assets/men/men3.png"

const Men = () => {
    return (
      <div className='wraper'>
        <section className='men'>
          <h1>Novedades</h1>
          <span><img src={Men1} alt="Novedades" /></span>
          <span><img src={Men2} alt="Camiseta" /></span>
          <span><img src={Men3} alt="Promocion" /></span>
        </section>
      </div>
    )
  }
  
  export default Men