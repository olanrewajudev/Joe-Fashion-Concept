import { useEffect, useState } from 'react'
import spins from '../assets/images/Spinner-9.gif'

const PageLoad = ({children}) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  if (loading) return <div className="flex items-center justify-center w-full mx-auto h-screen"> <img src={spins} alt="" className="w-[14rem]" /> </div>
  return <>{children}</>
}

export default PageLoad
