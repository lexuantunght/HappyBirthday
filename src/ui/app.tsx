import React from 'react';
import { AnimatedSwitching } from 'ui/animation/animated-switching';
import PassLock from 'ui/pass-lock';
import Render from 'ui/render2';
import Effects from 'ui/effects';
import Final from 'ui/final';
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
                {stage === 3 && <Effects onSuccess={() => setStage(4)} />}
                {stage === 4 && <Final />}
            </div>
        </AnimatedSwitching>
    );
};

export default App;
