var Validation = function(){
    this.kiemTraRong = function(value, name, selectorError){
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
            return false; 
        }
        document.querySelector(selectorError).innerHTML = ``;
        return true;
    }

    this.kiemTraChu = function(value, name, selectorError){
        var regexAllLetters = /^[a-z A-Z]+$/;
        if(regexAllLetters.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true
        }
        document.querySelector(selectorError).innerHTML = `${name} Phải là chữ !`;
        return false;
    }

    this.kiemTraEmail = function (value, name, selectorError) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} email không hợp lệ!`;
        return false;
    }
    this.kiemTraSo = function(value, name, selectorError){
        var regexAllNumber = /^[0-9]+$/;
        if(regexAllNumber.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true
        }
        document.querySelector(selectorError).innerHTML = `${name} Phải là số !`;
        return false;
    }

    this.kiemTraDoDai = function(value, name, selectorError, minLength, maxLength){
        if(value.trim().length > maxLength || value.trim().length < minLength) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = ``;
        return false;
    }

    this.kiemTraGiaTri = function (value, name, selectorError, minValue, maxValue) {
        if(Number(value) > maxValue || Number(value) < minValue) {
            document.querySelector(selectorError).innerHTML = `${name} từ ${minValue} đến ${maxValue}!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = ``;
        return true;
    }
}