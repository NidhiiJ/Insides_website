const ContactUs = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center p-2">
      <span className=" text-[11px] md:text-[12.5px] lg:text-[14px]">
        HAVE A PROJECT IN MIND?
      </span>
      <span className="pb-5 font-Maharlika text-[32px] md:text-[43px] lg:text-[54px]">
        Contact Us
      </span>
      <div className=" lg:h-[38em] lg:w-[80%] bg-white rounded-2xl md:grid grid-cols-3">
        <div className=" h-full w-full p-3">
          <div className="bg-contactus-image h-full w-full rounded-lg flex flex-col gap-5 items-start p-2">
            <div className=" md:block md:basis-1/4 pl-2 pt-6 font-semibold text-lg md:text-2xl">
              Contact Information
            </div>
            <div className="flex flex-col text-gray-300 gap-4 md:gap-6 grow px-2">
              <span>
                Number:
                <br /> <p className="text-gray-400">+91 76483927</p>
              </span>
              <span className="">
                Email:
                <br /> <p className="text-gray-400">johndoe@example.com</p>{" "}
              </span>
              <span className="">
                Address:
                <br />{" "}
                <p className="text-gray-400">Rose road, Mumbai 4000-032</p>
              </span>
            </div>

            <div className="content-end flex flex-row gap-3 px-2 pb-4">
              <i id="twitter">
                <img src="/twitter.svg" className="h-4 md:h-5 " alt="twitter" />
              </i>
              <i id="instagram">
              <img src="/instagram.svg" className="h-4 md:h-5" alt="twitter" />
              </i>
              {/* <i>icon3</i> */}
            </div>
          </div>
        </div>
        <div className="col-span-2 text-black m-8 ">
          <form action="submit">
            <div className="grid md:grid-cols-2  gap-5 md:gap-[3.25rem] my-5 ">
              <div>
                <label htmlFor="firstName">First Name:</label>
                <br />
                <input
                  className="appearance-none w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="firstName"
                  placeholder="john"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <br />
                <input
                  className="appearance-none  w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  className="appearance-none  w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="email"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <br />
                <input
                  className="appearance-none  w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="phoneNumber"
                  placeholder="+91 81030457458"
                />
              </div>
            </div>

            <div className="my-5 md:my-10">
              <label>Select Subject:</label>
              <div className="flex flex-wrap flex-row gap-3 md:gap-10 pt-3">
                <div className="flex flex-row gap-2">
                  <input
                    className=""
                    type="radio"
                    id="1"
                    name="fav_language"
                    value="1"
                  />
                  <label htmlFor="1">General Inquiry</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" id="2" name="fav_language" value="2" />
                  <label htmlFor="2">General Inquiry</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" id="3" name="fav_language" value="3" />
                  <label htmlFor="3">General Inquiry</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" id="4" name="fav_language" value="4" />
                  <label htmlFor="4">General Inquiry</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                className="w-full appearance-none bg-transparent border-black border-b-2 mb-5"
                name="formMessage"
                id="message"
                placeholder="type a message here.."
              ></textarea>
            </div>

            <div className="w-full h-full flex flex-col items-center md:items-end ">
              <button className="border-2 border-black rounded-full py-2 px-8 font-inter flex flex-row items-center font-[600] max-md:mt-5">
                <span className="pr-4 text-[12px] md:text-[18px]">
                  Submit Inquiry
                </span>
                <img src="/arrow-black.png" alt="arrow img" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
