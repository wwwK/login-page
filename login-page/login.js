function f1() {
    let tmp = document.getElementById("username");
    tmp.value = "";
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("phoneNumber");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("code");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("password");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("newPassword");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login");
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("send");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("modify");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("register");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("reset");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login2");
    tmp.setAttribute("hidden", "true")
}
function f2() {
    let tmp = document.getElementById("username");
    tmp.setAttribute("hidden", "true");
    tmp = document.getElementById("phoneNumber");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("code");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("password");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("newPassword");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("send");
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("modify");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("register");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("reset");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login2");
    tmp.removeAttribute("hidden");
}
function f3() {
    let tmp = document.getElementById("username");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("phoneNumber");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("code");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("password");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("newPassword");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("send");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("modify");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("register");
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("reset");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login2");
    tmp.setAttribute("hidden", "true")
}
function f4() {
    let tmp = document.getElementById("username");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("phoneNumber");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("code");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("password");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("newPassword");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("login");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("send");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("modify");
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("register");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("reset");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("login2");
    tmp.setAttribute("hidden", "true")
}
function f5() {
    let tmp = document.getElementById("username");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("phoneNumber");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("code");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("password");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("newPassword");
    tmp.removeAttribute("hidden");
    tmp.value = "";
    tmp = document.getElementById("login");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("send");
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("modify");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("register");
    tmp.setAttribute("hidden", "true")
    tmp = document.getElementById("reset");
    tmp.removeAttribute("hidden");
    tmp = document.getElementById("login2");
    tmp.setAttribute("hidden", "true")
}
function checkLogin2(){
    checkPhone();
    checkCode();
}
function checkLogin(){
    checkName();
    checkPwd();
}
function checkMod(){
    checkName();
    checkPwd();
checkNewPwd();
}
function checkReg() {
    checkName();
    checkPhone();
    checkPwd();
}
function checkRe(){
    checkPhone();
    checkCode();
    checkNewPwd();
}
function checkSend(){
    checkPhone();
}
function checkPwd() {
    let password = document.getElementById("password");
    let re = /^\w{6,20}$/;

    if (!re.test(password.value)) {
    password.value = "";
    alert("请输入6~20个大小写字母、数字或下划线作为密码！！！");
}

}
function checkNewPwd() {
    let password = document.getElementById("newPassword");
    let re = /^\w{6,20}$/;

    if (!re.test(password.value)) {
    password.value = "";
    alert("请输入6~20个大小写字母、数字或下划线作为新密码！！！");
}
}

function checkName() {
    let name = document.getElementById("username");
    let re = /^[a-zA-Z]{4,12}$/;

    if (!re.test(name.value)) {
        name.value = "";
        alert("请输入4~12个英文大小写字母作为用户名！！！");
    }
}
function checkPhone() {
    let phone = document.getElementById("phoneNumber");
    let re = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

    if (!re.test(phone.value)) {
        phone.value = "";
        alert("请输入正确手机号！！！");
    }
}
function checkCode() {
    let code = document.getElementById("code");
    let re = /^[0-9]{4}$/;

    if (!re.test(code.value)) {
        code.value = "";
        alert("请输入4位数字验证码！！！");
    }
}