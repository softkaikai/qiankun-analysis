import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface Props {
    container: HTMLElement
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
}
function render() {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        domApp || document.getElementById('root')
    );
}

export async function bootstrap(props: any) {
    console.log('react app bootstrap', props);
}

let domApp: Element | HTMLElement | null;

export async function mount(props: Props) {
    console.log('react app mount', props);
    domApp = props.container.querySelector('#root');
    // props.container ? props.container.querySelector('#app') : document.getElementById('#app')
    render();
    reportWebVitals();
}

export async function unmount(props: Props) {
    console.log('react app unmount');
    ReactDOM.unmountComponentAtNode(domApp as Element);
    domApp = null;
}

export async function update(props: any) {
    console.log('react app update props：', props);
}
