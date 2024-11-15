import AnchorNavbar from "./AnchorNavbar";
import ButtonJudulContent from './../atoms/ButtonJudulContent';
const JudulContent = ({ href, svg, text, className, svgButton, textButton }) => {
    return (
        <div className="block w-full py-1 px-2">
            <div className="w-full flex justify-between items-center">
                <AnchorNavbar
                    href={href}
                    className={className}
                    svg={svg}
                    text={text}
                />
                <ButtonJudulContent svg={svgButton} text={textButton}/>
            </div>
        </div>
    );
};

export default JudulContent;
