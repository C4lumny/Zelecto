export function Header() {
    return (
      <header className='bg-black text-center p-5 flex items-center justify-between'>
        <div className='flex items-center'>
          <img src="src/assets/logo.png" alt="" className="h-24" />
          <nav className='flex justify-center items-center'>
            <a href='#' className='hover-fuchsia text-white font-bold mx-8 hover:text-fuchsia-400 transition duration-200'>INICIO</a>
            <a href='#' className='text-white mx-8 hover:text-fuchsia-400 font-bold transition duration-200'>EJERCICIOS</a>
            <a href='#' className='text-white mx-8 hover:text-fuchsia-400 font-bold transition duration-200'>ALIMENTOS</a>
            <a href='#' className='text-white mx-8 hover:text-fuchsia-400 font-bold transition duration-200'>TIENDA</a>
          </nav>
        </div>
        <img src="src/assets/user2.png" alt="" className="h-24" />
      </header>
    );
  }
  