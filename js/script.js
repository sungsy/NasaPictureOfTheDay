const plus = '+';
const minus = '−';

function change( el )
{
    if ( el.value === plus )
        el.value = minus;
    else
        el.value = plus;
}