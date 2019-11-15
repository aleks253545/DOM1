
let form =document.forms.form1;
let elem=form.elements.textinput;
form.onsubmit=()=>{
    event.preventDefault(false);
    elem.value=elem.value.toString().replace(/(^|\s|\!|\?|\.|\:\\d)#([\w\d]+)\b/gi,` <h1>$2</h1>`);
    elem.value=elem.value.toString().replace(/(^|\s|\!|\?|\.|\:\\d)(?<name>\*\*)([\w\d]+)\k<name>?($|\s|\!|\?|\.|\:\\d)/gi,` <b>$3</b>`);
    let div=document.createElement('div');
    div.innerHTML=elem.value;
    div.style.cssText="display:flex; align-items:flex-end;"
    form.appendChild(div);
    elem.value='';
}


