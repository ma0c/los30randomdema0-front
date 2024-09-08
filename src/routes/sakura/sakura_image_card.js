export default function SakuraImageCard(props) {
    const {src, alt, text, color} = props;
    return (
        <div className="container-sakura-card" style={{width: 150}}>
            <img src={src} alt={alt} style={{width:"100%"}}/>
            <div className="centered-sakura-card" style={{color: color}}>{text}</div>
        </div>
    )
}