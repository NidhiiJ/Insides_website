import { JSX } from "react/jsx-runtime";
import Whyustextcard from "./ReusableComponents/Whyustextcard"

interface HeadingInfo {
    url: string;
    text: string;
}
interface Content {
    [key: string]: HeadingInfo;
}
const WhyUs = () => {
    const content:Content ={
        heading1: {
            'url':'/whyus-1.svg',
            'text': 'We manage your property from A to Z: Tenant search, reception, maintenance.'
        },
        heading2: {
            url:'/whyus-2.svg',
            text: 'Each month, we guarantee your rent, whatever the occupancy rate.'
        },
        heading3: {
            url:'/whyus-3.svg',
            text: 'You can recover your property whenever you want, the lease is concluded.'
        },
        heading4: {
            'url':'/whyus-1.svg',
            'text': 'We manage your property from A to Z: Tenant search, reception, maintenance.'
        },
        heading5: {
            url:'/whyus-2.svg',
            text: 'Each month, we guarantee your rent, whatever the occupancy rate.'
        },
        heading6: {
            url:'/whyus-3.svg',
            text: 'You can recover your property whenever you want, the lease is concluded.'
        },
    }
    
    const renderTextCard = (content: { [key: string]: HeadingInfo }) => {
        const textCards: JSX.Element[] = [];
      
        for (const header in content) {
          if (content.hasOwnProperty(header)) {
            const info = content[header];
            textCards.push(<Whyustextcard key={header} imgurl={info.url} text={info.text} heading={header} />);
          }
        }
      
        return textCards;
      }

  return (
    <div className="px-8">
        <div className="text-center text-[32px] md:text-[43px] lg:text-[54px] font-Maharlika pb-7 md:pb-14">Why Choose Us?</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 justify-items-center">
        {renderTextCard(content)}
        </div>
    </div>
  )
}

export default WhyUs