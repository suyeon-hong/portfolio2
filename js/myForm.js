class MyForm{
    constructor(selector, arr){
        this.frame = document.querySelector(selector);
        this.btnSubmit = this.frame.querySelector("input[type=submit]");

        arr.forEach(opt=>{
            this.btnSubmit.addEventListener("click", e=>{
                if(opt.type == "check"){
                    if(!this.isCheck(opt.name, opt.tit)) e.preventDefault();
                }
                if(opt.type == "text"){
                    if(!this.isText(opt.name, opt.len)) e.preventDefault();
                }
                if(opt.type == "password"){
                    if(!this.isPwd(opt.name[0], opt.name[1], opt.len)) e.preventDefault();
                }
                if(opt.type == "email"){
                    if(!this.isEmail(opt.name)) e.preventDefault();
                }
                if(opt.type == "security"){
                    if(!this.isSecurity(opt.name)) e.preventDefault();
                }
            });
        });
    }
    isCheck(name, tit){
        const checkbox = document.querySelector(`[name=${name}]`);
        const isChecked = checkbox.checked;
        if(isChecked){
            const errMsg = checkbox.parentElement.querySelector("p");
            if(errMsg) errMsg.remove();
            return true;
        }else{
            const errMsg = checkbox.parentElement.querySelector("p");
            if(errMsg) errMsg.remove();

            const htmls = `<p>${tit}은 필수항목 입니다.</p>`;
            checkbox.parentElement.innerHTML += htmls;

            return false;
        }
    }
    isText(name, len){
        const txt = document.querySelector(`[name=${name}]`);
        const val = txt.value;

        if(val.length >= len){
            const errMsg = txt.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();
            return true;
        }else{
            const errMsg = txt.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();

            const tit = txt.closest("tr").querySelector("th").innerText;
            const htmls = `<p>${tit}는 필수입력사항 입니다. ${len}자 이상 입력해 주세요.</p>`;
            txt.closest("td").innerHTML += htmls;

            return false;
        }
    }
    isPwd(name1, name2, len){
        const txt1 = document.querySelector(`[name=${name1}]`);
        const txt2 = document.querySelector(`[name=${name2}]`);
        const val1 = txt1.value;
        const val2 = txt2.value;
        const num = /[1-9]/;
        const eng = /[a-zA-Z]/;
        const spc = /[~!@#$%^&*()_]/;

        console.log(num.test(val1));
        console.log(eng.test(val1));
        console.log(spc.test(val1));
        if(val1 == val2 && val1.length >= len && num.test(val1) && eng.test(val1) && spc.test(val1)){
            const errMsg = txt1.closest("td").querySelector("p");
            const errMsg2 = txt2.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();
            if(errMsg2) errMsg2.remove();
            return true;
        }else if(val1 === val2){
            const errMsg = txt1.closest("td").querySelector("p");
            const errMsg2 = txt2.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();
            if(errMsg2) errMsg2.remove();

            const tit = txt1.closest("tr").querySelector("th").innerText;
            const htmls = `<p>${tit}는 필수입력사항 입니다. 숫자, 영문 대소문자, 특수문자를 포함한 ${len}자 이상 입력해 주세요.</p>`;
            txt1.closest("td").innerHTML += htmls;
            txt2.closest("td").innerHTML += htmls;

            return false;
        }else{
            const errMsg = txt1.closest("td").querySelector("p");
            const errMsg2 = txt2.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();
            if(errMsg2) errMsg2.remove();

            const tit = txt1.closest("tr").querySelector("th").innerText;
            const htmls = `<p>${tit}는 필수입력사항 입니다. 숫자, 영문 대소문자, 특수문자를 포함한 ${len}자 이상 입력해 주세요.</p>`;
            txt1.closest("td").innerHTML += htmls;
            txt2.closest("td").innerHTML += `<p>동일한 비밀번호를 입력해 주세요</p>`;

            return false;
        }
    }
    isEmail(name){
        const txt = document.querySelector(`[name=${name}]`);
        const val = txt.value;

        if(/@/.test(val)){
            const errMsg = txt.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();
            return true;
        }else{
            const errMsg = txt.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();

            const tit = txt.closest("tr").querySelector("th").innerText;
            const htmls = `<p>${tit}은 필수입력사항 입니다. @를 포함한 정확한 이메일 주소를 입력해 주세요.</p>`;
            txt.closest("td").innerHTML += htmls;

            return false;
        }
    }
    isSecurity(name){
        const txt = document.querySelector(`[name=${name}]`);
        const val = txt.value;
        const num = 1234

        if(val == num){
            const errMsg = txt.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();
            return true;
        }else{
            const errMsg = txt.closest("td").querySelector("p");
            if(errMsg) errMsg.remove();

            const tit = txt.closest("tr").querySelector("th").innerText;
            const htmls = `<p>${tit}은 필수입력사항 입니다. 정확한 숫자를 입력해 주세요.</p>`;
            txt.closest("td").innerHTML += htmls;

            return false;
        }
    }
}