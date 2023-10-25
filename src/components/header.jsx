export function Header(){
    return(
        <header className='bg-black text-center p-7'>
            <nav className='flex justify-center'>
                <a href='#' className='hover-fuchsia text-white font-bold mx-8 hover:text-fuchsia-400 transition duration-200'>INICIO</a>
                <a href='#' className='text-white mx-8 hover:text-fuchsia-400 font-bold transition duration-200'>EJERCICIOS</a>
                <a href='#' className='text-white mx-8 hover:text-fuchsia-400 font-bold transition duration-200'>ALIMENTOS</a>
                <a href='#' className='text-white mx-8 hover:text-fuchsia-400 font-bold transition duration-200'>TIENDA</a>
            </nav>
        </header>
    );
}