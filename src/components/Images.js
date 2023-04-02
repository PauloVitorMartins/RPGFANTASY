import '../css/images.css';

export default function ImagesRace (props) {
    const link = props.link;
    const text = props.race;
    return (
     <div className='inside'>
        <a href={`/${text}`}><img className='ImageP' src={link}/></a>
         <a className='race'>{text}</a>
     </div>
    )
}