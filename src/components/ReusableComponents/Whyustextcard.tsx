interface CustomProps{
    imgurl : string,
    text : string,
    heading: string
}

const Whyustextcard = (props:CustomProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:pb-10">
        <img src={props.imgurl} alt="cant load" className=" md:pb-4 h-7 md:h-full overflow-hidden"/>
        <div className="font-Poppins text-[18px] md:text-[24px] font-semibold">{props.heading}</div>
        <div className=" max-w-[305px] text-[15px] text-[#AEAEAE]">{props.text}</div>
    </div>
  )
}

export default Whyustextcard