import Typewriter from 'typewriter-effect';

const Name = () => {
    const name = 'Saloni Mehta';
    const tagline = ['frontend developer', '(board) gamer', 'iphone photo-taker', 'novice cook and baker'];

    return (
        <>
            <div className={'Name'}>{name}</div>
            <Typewriter
                options={{
                    strings: tagline,
                    autoStart: true,
                    loop: true,
                }}
            />
        </>
    )
}

export default Name;