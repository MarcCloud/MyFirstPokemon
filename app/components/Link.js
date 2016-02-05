import R from 'ramda';
const window = window || {};
const stopNavigation = (ev)=> window.history ? ev.preventDefault() : null;

export default (props)=> {
    return <a href={props.href} className={props.className} onClick={R.compose(props.handler, stopNavigation)}>{props.children}</a>;
};
