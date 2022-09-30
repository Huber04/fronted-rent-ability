const logout = document.getElementById('logout');

logout.onclick = function(){
    localStorage.clear();
    window.location.href = "/login"
}