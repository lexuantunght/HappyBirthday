import React from 'react';

function renderTime(value) {
    const h = Math.trunc(value / 3600);
    const m = Math.trunc((value - h * 3600) / 60);
    const s = value - h * 3600 - m * 60;
    return [h, m, s].map((v) => (v > 9 ? v : '0' + v)).join(':');
}

export default function Countdown(props) {
    const { value, onSuccess, ...rest } = props;
    const displayRef = React.useRef(null);

    React.useEffect(() => {
        let current = value;
        let timer = null;
        displayRef.current.textContent = renderTime(current);
        timer = setInterval(() => {
            if (current === 0) {
                clearInterval(timer);
                onSuccess();
            } else {
                current -= 1;
            }
            displayRef.current.textContent = renderTime(current);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 24,
            }}>
            <span style={{ fontSize: 24 }}>Chưa tới lúc, vui lòng đợi :D</span>
            <span
                style={{ fontSize: '10rem', fontWeight: 600, fontFamily: 'system-ui, Arial' }}
                {...rest}
                ref={displayRef}></span>
        </div>
    );
}
