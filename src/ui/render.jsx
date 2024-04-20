import React from 'react';
import BirthDayGif from 'images/200.gif';
import StarGif from 'images/star.gif';

const intro = `Hi Ngoc! Today is your birthday. \nI want to send a simple gift to you. Hope to see you happy in your day ^^ \n... \n... \n... \nLet's see it...`;

const Render = (props) => {
    const [text, setText] = React.useState([]);
    const [showImg, setShowImg] = React.useState(false);

    React.useEffect(() => {
        render(intro);
    }, []);

    const render = (txt) => {
        const arr = txt.split(' ');
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                setText((v) => [...v, arr[i]]);
                if (i >= arr.length - 1) {
                    setShowImg(true);
                    setTimeout(() => {
                        props.onSuccess();
                    }, 3000);
                }
            }, 400 * i);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${StarGif})` }} className="intro">
            {text.join(' ')}
            {showImg && <img src={BirthDayGif} />}
        </div>
    );
};

export default Render;
