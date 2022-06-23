import CatVibe from '../assets/vibe-cat.gif';

export default function Video () {
    return (
        <video autoPlay loop muted>
            <source src={CatVibe} type="gif/gif" />
        </video>
    )
}