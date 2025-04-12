import React from 'react';

const PassLock = (props) => {
    const valueRef = React.useRef('');
    const [err, setErr] = React.useState(false);

    const pass = React.useMemo(() => {
        const d = '1' + '7';
        const m = '0' + '4';
        const y = '2' + '0' + '0' + '3';
        return import.meta.VITE_PUBLIC_PW || d + m + y;
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        if (valueRef.current !== pass) {
            setErr(true);
        } else {
            props.onSuccess();
        }
    };

    return (
        <form onSubmit={onSubmit} className="pw-lock">
            <h2>Enter password to continue :D</h2>
            <input
                type="password"
                onChange={(e) => {
                    valueRef.current = e.target.value;
                }}
                className="pw-inp"
                placeholder="Password..."
            />
            <button className="pw-btn" type="submit">
                Goooo!
            </button>
            {err && <span className="pw-err">Wrong password :(</span>}
        </form>
    );
};

export default PassLock;
