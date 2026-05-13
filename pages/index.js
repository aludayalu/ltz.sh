import MagicRings from "@/components/MagicRings";
import { ClipboardCheckIcon } from "@/components/ui/clipboard-check";

export default function Home() {
    return (
        <>
        <div style={{ width: '100svw', height: '100svh', position: 'absolute', zIndex: -1 }}>
            <MagicRings
                color="#dc42ce"
                colorTwo="#f17051"
                ringCount={6}
                speed={1}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.35}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={0}
                noiseAmount={0.1}
                rotation={0}
                ringGap={1.5}
                fadeIn={0.7}
                fadeOut={0.5}
                followMouse={false}
                mouseInfluence={1}
                hoverScale={1}
                parallax={0}
                clickBurst={false}
            />
        </div>
        
        <div className="flex flex-col h-screen w-screen justify-center items-center fade-in">
            <div className="flex justify-center items-center">
                <img src="logo.svg" style={{width: "14svw"}} draggable={false}></img>
            </div>
            <div className="mt-3" style={{fontSize: "20px", color: "white"}}>The work suite made for efficiency.</div>
            <div className="flex justify-center items-center mt-2 gap-2">
                <div className="text-md font-bold py-[0.5vh] px-[0.7vw]" style={{fontFamily: "monospace", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.14)", width: "fit-content", fontSize: "14.5px", color: "white"}}>
                    curl ltz.sh | bash
                </div>
                <ClipboardCheckIcon size={24} onClick={() => {
                    navigator.clipboard.writeText("curl ltz.sh | bash")
                }}></ClipboardCheckIcon>
            </div>
        </div>
        </>
    )
}