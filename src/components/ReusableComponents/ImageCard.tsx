
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
    <div className={`${props.paddingTop? 'pt-[50px]': 'pt-[0]'} flex flex-col gap-1 px-3 md:px-6`}>
        <img src={props.imagePath} alt="img" className={`${props.windowSize < 768 ? ' h-[220px] w-[200px] max-w-none rounded-t-md ':' h-[395px] w-[193px] '} object-cover`}/>
        <p className=" leading-normal text-[10px] md:text-[14px] text-[#AEAEAE] ">{props.description.toUpperCase()}</p>
        <span className=" text-[16px] md:text-[28px] font-Maharlika">{props.title.toUpperCase()}</span>
    </div>
  )
}

export default ImageCard