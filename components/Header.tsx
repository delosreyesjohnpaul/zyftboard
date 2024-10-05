import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1">
        <h4 className="text-2xl font-bold">
            Zyft<span className="bg-gradient-to-r from-emerald-500 to-sky-400 inline-flex font-bold tracking-widest text-transparent bg-clip-text">Board</span>
        </h4>
      </Link>
      {children}
    </div>
  )
}

export default Header