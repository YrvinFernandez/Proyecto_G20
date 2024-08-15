const usePrendas = () => {
  const API = 'http://localhost:3000/mujeres'
 
  const getPrendas = async () => {
      const data = await fetch(API)
      const response = await data.json()
      console.log(response)
      return response
  }

  return {
      getPrendas
  }
}

export default usePrendas
