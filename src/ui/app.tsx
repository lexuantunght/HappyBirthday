import React from 'react';
import { AnimatedSwitching } from 'ui/animation/animated-switching';
import PassLock from 'ui/pass-lock';
import Render from 'ui/render2';
import Effects from 'ui/effects';
import Final from 'ui/final';
import Countdown from 'ui/countdown';
import Sound from 'sound/sound-manager';

const App = () => {
    const [stage, setStage] = React.useState(-1);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        Sound.init();
        fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FSaigon', { method: 'GET' })
            .then((res) => res.json())
            .then((res) => {
                const timeNow = new Date(res.dateTime).getTime();
                const targetTime = new Date(
                    import.meta.env.VITE_PUBLIC_TARGET_TIME || '2025-04-17T00:00:00.0000000'
                ).getTime();
                if (timeNow < targetTime) {
                    setCount(Math.round((targetTime - timeNow) / 1000));
                    setStage(0);
                } else {
                    setStage(1);
                }
            });
    }, []);

    return (
        <AnimatedSwitching classNames="anim-fade" identifier={stage}>
            <div id="app">
                {stage === 0 && <Countdown value={count} onSuccess={() => setStage(1)} />}
                {stage === 1 && <PassLock onSuccess={() => setStage(2)} />}
                {stage === 2 && <Render onSuccess={() => setStage(3)} />}
                {stage === 3 && <Effects onSuccess={() => setStage(4)} />}
                {stage === 4 && <Final />}
            </div>
        </AnimatedSwitching>
    );
};

export default App;
