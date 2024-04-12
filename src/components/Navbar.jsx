import logo from '../imgs/logo.svg'

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
            {/* Logo */}
            <div className='pt-2'>
                <img src={logo} alt="logo" />
            </div>
            {/* Menu */}
            <div className="hidden lg:flex space-x-12">
                <p className='hover:text-darkGrayishBlue'>Pricing</p>
                <p className='hover:text-darkGrayishBlue'>Product</p>
                <p className='hover:text-darkGrayishBlue'>About Us</p>
                <p className='hover:text-darkGrayishBlue'>Careers</p>
                <p className='hover:text-darkGrayishBlue'>Community</p>
            </div>
            {/* Button */}
            <p className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</p>
        </div>
    </nav>
  )
}

export default Navbar