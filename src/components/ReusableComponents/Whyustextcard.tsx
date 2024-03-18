interface CustomProps{
    imgurl : string,
    text : string,
    heading: string
}

const Whyustextcard = (props:CustomProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 md:pb-10">
        <img src={props.imgurl} alt="cant load" className="pb-2 md:pb-4 h-[90%]"/>
        <span className="font-Poppins text-[18px] md:text-[24px] font-semibold">{props.heading}</span>
        <div className=" max-w-[305px] text-[15px] text-[#AEAEAE]">{props.text}</div>
    </div>
  )
}

export default Whyustextcard