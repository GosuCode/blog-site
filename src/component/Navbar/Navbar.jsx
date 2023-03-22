import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 w-full border-solid border-b-0 shadow-md border-[#6c757d]'>
        <div className='px-[12px]'>
            <input placeholder='Search...'
            className='focus:outline-none w-[300px] border-solid border-2
            border-[#ccc] rounded-[30px] h-[38px] px-[40px]'/>
        </div>
        <div className='font-bold font-sans w-full text-center px-[12px]'>MAGDESIGN</div>
        <div className='flex justify-between px-[12px]'>
        <div className='flex mr-16'>
            <div className='py-[5px] px-[12px]'><AiOutlineTwitter/></div>
            <div className='py-[5px] px-[12px]'><FaFacebookF/></div>
            <div className='py-[5px] px-[12px]'><AiOutlineInstagram/></div>
        </div>
        <div className='ml-16'><Sidebar/> </div>
        </div>
    </div>
  )
}

export default Navbar
