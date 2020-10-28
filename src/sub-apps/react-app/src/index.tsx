import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface Props {
    container: string
}

export async function bootstrap(props: any) {
    console.log('react app bootstrap', props);
}

export async function mount(props: Props) {
    console.log('react app mount');
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById(props.container ? props.container : 'root')
    );
    reportWebVitals();
}

export async function unmount(props: Props) {
    console.log('react app unmount');
    ReactDOM.unmountComponentAtNode(document.getElementById(props.container ? props.container : 'root') as Element);
}

export async function update(props: any) {
    console.log('react app update props：', props);
}
