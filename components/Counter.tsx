"use client"
import {useState} from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

function Counter() {
  const [val, setVal] = useState(0)
  return (
    <section>
     <div>
      <Button  variant={'default'} onClick={()=>setVal(val+1)}>plus <span><PlusIcon size={15}/></span></Button>
     </div>
     <div>{val}</div>
     <div>
      <Button variant={'default'} onClick={()=>setVal(val-1)}>Minus <span><MinusIcon size={15}/></span></Button>
     </div>
    </section>
  )
}

export default Counter
