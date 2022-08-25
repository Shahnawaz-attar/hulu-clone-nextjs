import Image from 'next/image'
import HeaderItems from './HeaderItems'
import { BadgeCheckIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItems title="Home" Icon={HomeIcon} />
            <HeaderItems title="Movies" Icon={LightningBoltIcon} />
            <HeaderItems title="Shows" Icon={BadgeCheckIcon} />
            <HeaderItems title="People" Icon={UserIcon} />
            <HeaderItems title="Search" Icon={SearchIcon} />
            
        </div>
  
        <Image className='object-contain'
        src="https://links.papareact.com/ua6" alt="Hulu" width={200} height={100} />



    </header>

  )
}

export default Header