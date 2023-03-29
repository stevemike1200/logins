var j = true;

var coastNo = localStorage.getItem('banktotal');
var coastDis = localStorage.getItem('divtotal');

auth.onAuthStateChanged(user => {
    if(localStorage.getItem('banklogs') && !localStorage.getItem('received-funds')) {
        if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
            var elemj = document.getElementById('pablos');        
            
            var id = setInterval(frame, 1000);

            if(!localStorage.getItem('timez-set')) {
                var jo = new Date();
                var po = jo.getTime();
                var p1ko = po/1000;

                var p1knoDecimalo = Math.trunc(p1ko);

                localStorage.setItem('seconds-left', p1knoDecimalo);
                localStorage.setItem('timez-set', true);
            }
            let width = 600;

            function frame(){

                var j = new Date();
                var p = j.getTime();
                var p1k = p/1000;
                var p1knoDecimal = Math.trunc(p1k);
                var theTime = localStorage.getItem('seconds-left');
                var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
                width = 600 - timeDifference;

                if(width <= 0){
                    clearInterval(id);
                    i = false;
                    localStorage.setItem('riz-time', true);
                    localStorage.removeItem('timez-set');
                    localStorage.setItem('banklogs',[]);
                    document.getElementById('predat').style.display = 'flex';
                    document.getElementById('logsection').style.display = 'none';
                    document.getElementById('logsection2').style.display = 'none';
                    document.getElementById('cartlength').style.display = 'none';
                } 

                
                else if( width <= 59) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 60) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        var msg = `1 Minute Left! <br> ${user.email}, <hr class="to-hr"> Let the timer run out, then choose another banklog and pay for it on time. `;
                    } else if(user.phoneNumber) { 
                        var msg = `1 Minute Left! <br> ${user.phoneNumber}, <hr class="to-hr"> Let the timer run out, then choose another banklog and pay for it on time. `;
                    } else if(user.isAnonymous) {
                        var msg = `1 Minute Left! <br> Anonymous User <hr class="to-hr"> Let the timer run out. You'll be required to get an email / phone invoice next time. `;
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 119) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 120) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `2 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `2 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `2 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `2 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `2 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `2 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 179) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 180) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `3 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `3 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `3 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `3 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `3 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `3 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 200) {
                    elemj.classList.add("bg-danger");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                
                
                else if( width <= 239) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 240) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `4 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `4 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `4 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `4 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `4 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `4 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 299) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 300) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `5 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `5 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `5 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `5 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `5 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `5 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 359) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 360) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `6 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `6 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `6 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `6 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `6 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `6 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 

                else if( width <= 400) {
                    elemj.classList.add("bg-warning");
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 

                else if( width <= 419) {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 420) {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `7 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `7 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `7 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `7 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `7 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `7 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 479) {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 480) {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `8 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `8 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `8 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `8 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `8 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `8 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else if( width <= 539) {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                } 
                else if( width == 540) {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;

                    var shortCutFunction = 'success';
                    if(user.email) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `9 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `9 Minutes Left! <br> ${user.email}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.phoneNumber) { 
                        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                            var msg = `9 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastNo} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out.`; 
                        } else {
                            var msg = `9 Minutes Left! <br> ${user.phoneNumber}, <hr> Complete the $${coastDis} bitcoin payment to download: 
                            <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out.`; 
                        }
                    } else if(user.isAnonymous) {
                        if(localStorage.getItem('ras-time')) {
                            width = 600;
                            frame();
                        } else {
                            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                                var msg = `9 Minutes Left!, <hr> Complete the $${coastNo} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs'))[0].account).replace(']',' ACCOUNT]')} before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            } else {
                                var msg = `9 Minutes Left!, <hr> Complete the $${coastDis} bitcoin payment to download: 
                                <hr class="to-hr"> ${(JSON.parse(localStorage.getItem('banklogs')).length)} bank logs before time runs out. 
                                <hr> Email invoice is a better option. `; 
                            }
                        }
                    }
                    toastr.options = {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
                    var $toast = toastr[shortCutFunction](msg);
                    $toastlast = $toast;
                } 


                else {
                    var minutes = Math.floor(width/60);
                    var seconds = width - minutes * 60;
                    if(seconds < 10){ seconds = '0'+seconds }
                    elemj.style.width = (width/6) + "%";
                    document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
                }
            }

        } else {
            console.log('No items are in cart');
        }
    } else {
        console.log('No bank logs selected')
    }     
});  

if(localStorage.getItem('received-funds')) {
    document.getElementById('bipart').style.display = 'flex';
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('predat').style.display = 'none';
    document.getElementById('bit-bal').innerHTML = `You Paid: <span>$${(parseInt(localStorage.getItem('received-funds')).toLocaleString())}</span>`;

    document.getElementsByClassName('bit-p')[0].innerHTML = `
        A bitcoin payment of <span>$${(parseInt(localStorage.getItem('received-funds')).toLocaleString())}</span> has been detected, 
        Visit the download page and complete the progress.
    `;
} else if(!localStorage.getItem('banklogs') || ((JSON.parse(localStorage.getItem('banklogs')).length) < 1)) {
    document.getElementById('predat').style.display = 'flex';
}