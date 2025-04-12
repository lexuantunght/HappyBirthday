import React from 'react';
import Ballon1 from 'static/images/ballon1.svg';
import Ballon2 from 'static/images/ballon2.svg';
import Ballon3 from 'static/images/ballon3.svg';
import Hat from 'static/images/hat.svg';
import Irene from 'static/images/irene.jpg';
import 'static/css/render2.css';
import Sound from 'sound/sound-manager';

const NAME = import.meta.env.VITE_PUBLIC_NAME || 'you';
const AVATAR = import.meta.env.VITE_PUBLIC_AVATAR || Irene;
const ME = import.meta. env.VITE_PUBLIC_ME || 'mình';

// animation timeline
const animationTimeline = (callback) => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName('hbd-chatbox')[0];
    const hbd = document.getElementsByClassName('wish-hbd')[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split('')
        .join('</span><span>')}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML.split('').join('</span><span>')}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: '15deg',
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: '-15deg',
    };

    // timeline
    const tl = new TimelineMax();

    tl.to('.container', 0.6, {
        visibility: 'visible',
    })
        .from('.one', 0.7, {
            opacity: 0,
            y: 10,
        })
        .from('.two', 0.4, {
            opacity: 0,
            y: 10,
        })
        .to(
            '.one',
            0.7,
            {
                opacity: 0,
                y: 10,
            },
            '+=3.5'
        )
        .to(
            '.two',
            0.7,
            {
                opacity: 0,
                y: 10,
            },
            '-=1'
        )
        .from('.three', 0.7, {
            opacity: 0,
            y: 10,
        })
        .to(
            '.three',
            0.7,
            {
                opacity: 0,
                y: 10,
            },
            '+=3'
        )
        .from('.four', 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from('.fake-btn', 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            '.hbd-chatbox span',
            1.5,
            {
                visibility: 'visible',
            },
            0.05
        )
        .to(
            '.fake-btn',
            0.1,
            {
                backgroundColor: 'rgb(127, 206, 248)',
            },
            '+=4'
        )
        .to(
            '.four',
            0.5,
            {
                scale: 0.2,
                opacity: 0,
                y: -150,
            },
            '+=1'
        )
        .from('.idea-1', 0.7, ideaTextTrans)
        .to('.idea-1', 0.7, ideaTextTransLeave, '+=2.5')
        .from('.idea-2', 0.7, ideaTextTrans)
        .to('.idea-2', 0.7, ideaTextTransLeave, '+=2.5')
        .from('.idea-3', 0.7, ideaTextTrans)
        .to('.idea-3 strong', 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: 'rgb(21, 161, 237)',
            color: '#fff',
        })
        .to('.idea-3', 0.7, ideaTextTransLeave, '+=2.5')
        .from('.idea-4', 0.7, ideaTextTrans)
        .to('.idea-4', 0.7, ideaTextTransLeave, '+=2.5')
        .from(
            '.idea-5',
            0.7,
            {
                rotationX: 15,
                rotationZ: -10,
                skewY: '-5deg',
                y: 50,
                z: 10,
                opacity: 0,
            },
            '+=1.5'
        )
        .to(
            '.idea-5 span',
            0.7,
            {
                rotation: 90,
                x: 8,
            },
            '+=1.4'
        )
        .to(
            '.idea-5',
            0.7,
            {
                scale: 0.2,
                opacity: 0,
            },
            '+=2'
        )
        .staggerFrom(
            '.idea-6 span',
            0.8,
            {
                scale: 3,
                opacity: 0,
                rotation: 15,
                ease: Expo.easeOut,
            },
            0.2
        )
        .staggerTo(
            '.idea-6 span',
            0.8,
            {
                scale: 3,
                opacity: 0,
                rotation: -15,
                ease: Expo.easeOut,
            },
            0.2,
            '+=1.5',
            () => {
                Sound.play()
            }
        )
        .staggerFromTo(
            '.baloons img',
            2.5,
            {
                opacity: 0.9,
                y: 1400,
            },
            {
                opacity: 1,
                y: -1000,
            },
            0.2
        )
        .from(
            '.profile-picture',
            0.5,
            {
                scale: 3.5,
                opacity: 0,
                x: 25,
                y: -25,
                rotationZ: -45,
            },
            '-=2'
        )
        .from('.hat', 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .staggerFrom(
            '.wish-hbd span',
            0.7,
            {
                opacity: 0,
                y: -50,
                // scale: 0.3,
                rotation: 150,
                skewX: '30deg',
                ease: Elastic.easeOut.config(1, 0.5),
            },
            0.1
        )
        .staggerFromTo(
            '.wish-hbd span',
            0.7,
            {
                scale: 1.4,
                rotationY: 150,
            },
            {
                scale: 1,
                rotationY: 0,
                color: '#ff69b4',
                ease: Expo.easeOut,
            },
            0.1,
            'party'
        )
        .from(
            '.wish h5',
            0.5,
            {
                opacity: 0,
                y: 10,
                skewX: '-15deg',
            },
            'party'
        )
        .staggerTo(
            '.eight svg',
            1.5,
            {
                visibility: 'visible',
                opacity: 0,
                scale: 80,
                repeat: 3,
                repeatDelay: 1.4,
            },
            0.3
        )
        .to('.six', 0.5, {
            opacity: 0,
            y: 30,
            zIndex: '-1',
        })
        .staggerFrom('.nine p', 1, ideaTextTrans, 1.2)
        .to(
            '.last-smile',
            0.5,
            {
                rotation: 90,
            },
            '+=1'
        )
        .then(() => {
            if (callback) callback();
        });
};

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(script);
        };
        script.onerror = (e) => {
            reject(e);
        };
    });
};

export default function Render(props) {
    const scripts = React.useRef([]);
    React.useEffect(() => {
        (async () => {
            scripts.current = await Promise.all([
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'),
                loadScript('https://cdn.jsdelivr.net/npm/sweetalert2@11'),
            ]);
            animationTimeline(props.onSuccess);
        })();

        return () => {
            scripts.current.forEach((s) => {
                document.body.removeChild(s);
                s.remove();
            });
        };
    }, []);

    const content = (
        <div className="container">
            <div className="one">
                <h1 className="one">
                    <span id="name">{'Chào ' + NAME}</span>
                </h1>
                <p className="two" id="greetingText">
                    Đây là một món quà nho nhỏ
                </p>
            </div>

            <div className="three">
                <p>{`Hôm nay là sinh nhật của ${NAME} ❤️`}</p>
            </div>

            <div className="four">
                <div className="text-box">
                    <p className="hbd-chatbox">
                        {`Chúc ${NAME} sinh nhật vui vẻ nha!! Chúc ${NAME} sang tuổi mới luôn mạnh khoẻ, có nhiều nhiềm vui và hạnh phúc, mãi xinh đẹp và mãi ở tuổi thanh xuân rực rỡ này. Và luôn vững bước vượt qua mọi khó khăn nữa.`}
                    </p>
                    <p className="fake-btn">{`Gửi ${NAME}`}</p>
                </div>
            </div>

            <div className="five">
                <p className="idea-1">{`Đó là những gì ${ME} muốn nhắn gửi.`}</p>
                <p className="idea-2">Nhưng mà khoan, dừng lại khoảng 2s.</p>
                <p className="idea-3">
                    {`${ME} nhận ra, ${ME} muốn tặng ${NAME} một thứ nữa, `}
                    <br />
                    <strong>đặc biệt</strong>.
                </p>
                <p className="idea-4">Bởi vì,</p>
                <p className="idea-5">
                    {`${NAME} rất quan trọng trong ${ME}`}
                    <span>⭐</span>
                </p>
                <p className="idea-6">
                    <span>ĐÓ</span>
                    <span>LÀ</span>
                </p>
            </div>

            <div className="six">
                <img src={AVATAR} alt="profile" className="profile-picture" id="imagePath" />
                <img src={Hat} alt="hat" className="hat" />
                <div className="wish">
                    <h3 className="wish-hbd">Happy Birthday!</h3>
                    <h5 id="wishText">{`Love you so muchhhh muchhhhh! 🫶`}</h5>
                </div>
            </div>

            <div className="seven">
                <div className="baloons">
                    <img src={Ballon2} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon3} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon2} alt="" />
                    <img src={Ballon1} alt="" />
                    <img src={Ballon3} alt="" />
                </div>
            </div>

            <div className="eight">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" />
                </svg>
            </div>

            <div className="nine">
                <p>Rồi, giờ tắt đèn để xem tiếp nha :v</p>
                <p className="last-smile">⭐</p>
            </div>
        </div>
    );

    return content;
}
