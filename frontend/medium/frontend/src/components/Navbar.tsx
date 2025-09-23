import NameInitial from './NameInitial'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full min-h-16 border-b-1 border-slate-400  lg:px-20 md:px-10 px-5'>
      <Link to="/blogs"><div className='font-serif text-2xl'>Medium</div></Link>
      <div className='flex items-center gap-x-8'>
      <Link to="/publish">
      <button className="font-inherit bg-green-700 text-white px-5 py-3 pl-[0.9em] flex items-center border-none rounded-full overflow-hidden transition-all duration-200 cursor-pointer active:scale-95 group">
  <div className="svg-wrapper-1">
    <div className="svg-wrapper group-hover:animate-fly-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        className="transition-transform duration-300 ease-in-out group-hover:translate-x-8 group-hover:rotate-[45deg] group-hover:scale-120"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span className="ml-1.5 text-sm  tracking-wider transition-all duration-300 ease-in-out group-hover:translate-x-32 ">New Blog</span>
</button>
      </Link>

        <NameInitial size={10} />
      </div>

    </div>
  )
}

export default Navbar
