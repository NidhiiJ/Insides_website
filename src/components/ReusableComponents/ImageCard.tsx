
interface CustomProps{
    paddingTop : boolean;
    imagePath : string;
    title : string;
    description : string;
    windowSize: number
    // paddingBottom : number;
}

const ImageCard = (props:CustomProps) => {
  return (
    <div className={`${props.paddingTop? 'pt-[50px]': 'pt-[0]'} px-3 md:px-6`}>
        <img src={props.imagePath} alt="img" className={`${props.windowSize < 768 ? ' h-[160px] w-[160px] ':' h-[395px] w-[193px] '} object-cover`}/>
        <span className="text-[7px] md:text-[10px] text-[#AEAEAE]">{props.description.toUpperCase()}</span>
        <br/>
        <span className=" text-[16px] md:text-[28px] font-Maharlika">{props.title.toUpperCase()}</span>
    </div>
  )
}

export default ImageCard