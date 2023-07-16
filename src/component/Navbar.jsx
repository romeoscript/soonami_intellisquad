
import profile from '../assets/profile.jpeg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({nav, setNav}) => {

  return (
    <div className='flex items-center justify-between p-[1rem] border-[1px] border-[gray] bg-[white] z-[20] fixed h-[80px] top-0 w-full'>
        <div className='flex items-center gap-4'>
          
             <div>
                    {nav ? <CloseIcon onClick={()=>setNav(!nav)} className='text-2xl'/> : <MenuIcon onClick={()=>setNav(!nav)} className='text-2xl'/>}
             </div>
             <h1>IntelliSquad</h1>
        </div>
        
        <div className='flex items-center gap-2'>
            John Doe
            <img src={profile} className='h-[60px] w-[60px] rounded-full object-cover' alt="" />
        </div>
    </div>
  )
}

export default Navbar