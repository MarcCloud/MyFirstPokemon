import { Observable } from 'rx';
import DOM from 'react-dom';
import R from 'ramda';
import monarch$ from './routes';

const run$ = Observable.fromEvent(window, 'click')
                .filter(ev=> window.history && ev.target.tagName === 'A')
                .map(ev => {ev.preventDefault(); return ev.target;})
                .flatMap(target => {
                    history.pushState({}, 'MFP', target.pathname);
                    return monarch$(target.pathname);
                }).merge(monarch$(window.location.href));

run$.subscribe(({content, state})=> {
       DOM.render(content, document.getElementById('root'));
       window.STATE = state;
   });
