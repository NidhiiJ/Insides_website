
const Footer = () => {
  return (
    <div className="bg-[#DBD8CE] flex flex-col text-black mt-10 md:mt-24 pt-16 px-20 pb-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[30%]">
            <div id='foot-contact'>
                <h1 className="text-[22px] pb-5">INSIDES</h1>
                <span className="font-semibold">+91 84637485</span>
                <p>support@insides.com</p>
            </div>
            <div id='foot-sitemap'>
                <h2 className="font-bold pb-2">Site map</h2>
                <div className="grid grid-rows-auto md:grid-cols-2 md:grid-rows-auto gap-y-1 md:gap-x-20">
                    <a href="">Home</a>
                    <a href="">Our Process</a>
                    <a href="">About Us</a>
                    <a href="">Projects</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
        </div>
        <div className="h-[0.8px] w-full self-center bg-[#051D1D] mt-14"></div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-5">
            <div className="flex gap-3">
                <i>icon1</i>
                <i>icon2</i>
                <i>icon3</i>
            </div>
            <span className="text-center">© 2024 DN Designs, All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer