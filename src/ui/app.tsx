import React from 'react';
import { AnimatedSwitching } from 'ui/animation/animated-switching';
import PassLock from 'ui/pass-lock';
import Render from 'ui/render';
import Effects from 'ui/effects';
import Sound from 'sound/sound-manager';

const App = () => {
    const [stage, setStage] = React.useState(1);

    React.useEffect(() => {
        Sound.init();
    }, []);

    return (
        <AnimatedSwitching classNames="anim-fade" identifier={stage}>
            <div id="app">
                {stage === 1 && <PassLock onSuccess={() => setStage(2)} />}
                {stage === 2 && <Render onSuccess={() => setStage(3)} />}
                {stage === 3 && <Effects />}
            </div>
        </AnimatedSwitching>
    );
};

export default App;
