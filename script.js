let input = document.getElementById('input'),
    check = document.getElementById('check'),
    lower = document.getElementById('lower'),
    upper = document.getElementById('upper'),
    number = document.getElementById('num'),
    special = document.getElementById('special'),
    charLength = document.getElementById('length');

function checkPassword(data){
    
    let lowerReg = new RegExp('(.*[a-z])');
    let upperReg = new RegExp('([A-Z])');
    let numReg = new RegExp('([0-9])');
    let specialReg = new RegExp('([!@#\$%\^&\*])');
    let lengthReg = new RegExp('(.{8,})');


    if(lowerReg.test(data)){
        lower.classList.add('vaild')
    }else{
        lower.classList.remove('vaild')
    }

    if(upperReg.test(data)){
        upper.classList.add('vaild')
    }else{
        upper.classList.remove('vaild')
    }

    if(numReg.test(data)){
        number.classList.add('vaild')
    }else{
        number.classList.remove('vaild')
    }

    if(specialReg.test(data)){
        special.classList.add('vaild')
    }else{
        special.classList.remove('vaild')
    }

    if(lengthReg.test(data)){
        charLength.classList.add('vaild')
    }else{
        charLength.classList.remove('vaild')
    }
    
}

check.onclick = function(){
    if(input.type === 'password'){
        input.setAttribute('type', 'text');
        check.classList.add('hide');
    } else{
        input.setAttribute('type', 'password');
        check.classList.remove('hide');
    }
}