import { useNavigate } from 'react-router';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleChangePage = (page: string) => {

    navigate(page);
  }
  return (
    <div className='w-full bg-gray-800 text-white p-4'>
      <button onClick={()=>handleChangePage("")} className='mr-10 border py-1 px-2'>Home</button>
      <button onClick={()=>handleChangePage("login")} className='mr-10 border py-1 px-2'>Login</button>
    </div>
  )
}

export default HeaderComponent