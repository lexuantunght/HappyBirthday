import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export interface AnimatedSwitchingProps {
    identifier: unknown;
    timeout?: number;
    classNames: string;
}

export const AnimatedSwitching: React.FunctionComponent<AnimatedSwitchingProps> = (props) => {
    const { identifier, classNames, timeout = 300 } = props;
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                classNames={classNames}
                key={String(identifier)}
                addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
                timeout={timeout}>
                {props.children}
            </CSSTransition>
        </SwitchTransition>
    );
};
