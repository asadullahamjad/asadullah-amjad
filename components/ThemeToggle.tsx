'use client'
import React,{useEffect, useState} from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, SunIcon } from 'lucide-react';

function ThemeToggle() {
    const {setTheme,resolvedTheme} = useTheme()
    const [mounted, setmounted] = useState(false)

    useEffect(()=>{
        setmounted(true)
    },[])

    if(!mounted){
        return null
    }
  return (
    <Button
    size={'sm'}
    variant={'ghost'}
    onClick={()=>setTheme(resolvedTheme === 'dark'?'light':'dark')}
    >
      {resolvedTheme === 'dark' ? <>
      <SunIcon className='size-4 text-orange-300'/>
      </>:<>
      <Moon className='size-4 text-blue-900'/>
      </>}
      <span></span>
    </Button>
  )
}

export default ThemeToggle
