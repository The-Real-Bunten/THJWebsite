window.onload = function () { 
    var dt = new Date();
    var time =dt.getUTCHours() + ":" + dt.getMinutes();
    var date =dt.toDateString();

    document.querySelector('.time').innerHTML = time;
    document.querySelector('.date').innerHTML = date;



};
