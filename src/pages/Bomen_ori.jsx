import { useEffect, useState } from "react"
//import { toast } from 'sonner'
import { Box } from "@mui/material"

import usePrendas from "../hooks/usePrendas"

const Bomen_ori = () => {
    const [prendas, setPrendas] = useState([])
    const { getPrendas } = usePrendas()

    useEffect(() => {
        (async () => {
          const data = await getPrendas()
          setPrendas(data)
        })()
      }, [])
    
      return (

    <div className='wraper'>
       <section className='Bomen'>

        <h1>Esto es women</h1>
        
        { prendas.map(p => (
       <Box key={ p.id }> { p.nombre } </Box>


        ))

    }
      </section>
    </div>

  )
}

export default Bomen_ori
