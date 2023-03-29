auth.onAuthStateChanged(user => {
    "use strict";
    var toast = localStorage.getItem('banktotal');
    var toast2 = localStorage.getItem('divtotal');
    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
    var toastbitcoin = '';
    var toastbitcoin2 = '';
    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
        toastbitcoin2 = (toast2 / (parseFloat(stockObject.k.c))).toFixed(5);
    }

    var i = -1;
    var $toastlast;

    var getMessage = function() {        
        if(user.email) {
            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                for (var i = 0; i < items.length; i++) {
                    var msgs = [`
                        ${toastbitcoin} Bitcoin payment not detected,
                        <hr>
                        Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                        <hr class="to-hr">
                        Bank log files will be sent to: ${user.email}
                    `];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }
                    return msgs[i];
                }
            } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {        
                for (var i = 0; i < items.length; i++) {
                    var msgs = [`
                        ${toastbitcoin2} Bitcoin payment not detected,
                        <hr>
                        Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}, 
                        <hr class="to-hr">
                        Bank log files will be sent to: ${user.email}
                    `];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }
                    return msgs[i];
                }
            } else if(JSON.parse(localStorage.getItem('banklogs')).length == 3) {        
                for (var i = 0; i < items.length; i++) {
                    var msgs = [`
                        ${toastbitcoin2} Bitcoin payment not detected,
                        <hr>
                        Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                        <hr class="to-hr">
                        Bank log files will be sent to: ${user.email}
                    `];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }
                    return msgs[i];
                }
            }
        } else if(user.phoneNumber) {
            if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                for (var i = 0; i < items.length; i++) {
                    var msgs = [`
                        ${toastbitcoin} Bitcoin payment not detected,
                        <hr>
                        Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                        <hr class="to-hr">
                        A link with bank log files will be sent to: ${user.phoneNumber}
                    `];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }
                    return msgs[i];
                }
            } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {        
                for (var i = 0; i < items.length; i++) {
                    var msgs = [`
                        ${toastbitcoin2} Bitcoin payment not detected,
                        <hr>
                        Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}, 
                        <hr class="to-hr">
                        A link with bank log files will be sent to: ${user.phoneNumber}
                    `];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }
                    return msgs[i];
                }
            } else if(JSON.parse(localStorage.getItem('banklogs')).length == 3) {        
                for (var i = 0; i < items.length; i++) {
                    var msgs = [`
                        ${toastbitcoin2} Bitcoin payment not detected,
                        <hr>
                        Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                        <hr class="to-hr">
                        A link with bank log files will be sent to: ${user.phoneNumber}
                    `];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }
                    return msgs[i];
                }
            }
        } else if(user.isAnonymous) {
            if(platform.manufacturer !== null) {
                if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected,
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                            <hr class="to-hr">
                            Bank log files will be saved on your: ${platform.manufacturer} ${platform.product} ${platform.os} 
                            from ${platform.name} Web Browser. 
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {        
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin2} Bitcoin payment not detected,
                            <hr>
                            Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}, 
                            <hr class="to-hr">
                            Bank log files will be saved on your: ${platform.manufacturer} ${platform.product} ${platform.os} 
                            from ${platform.name} Web Browser. 
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                } else if(JSON.parse(localStorage.getItem('banklogs')).length == 3) {        
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin2} Bitcoin payment not detected,
                            <hr>
                            Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                            <hr class="to-hr">
                            Bank log files will be saved on your: ${platform.manufacturer} ${platform.product} ${platform.os} 
                            from ${platform.name} Web Browser. 
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
            } else {
                if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin} Bitcoin payment not detected,
                            <hr>
                            Scan the bitcoin address and send $${toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                            <hr class="to-hr">
                            Bank log files will be saved on your: ${platform.os} 
                            from ${platform.name} Web Browser. 
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) {        
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin2} Bitcoin payment not detected,
                            <hr>
                            Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}, 
                            <hr class="to-hr">
                            Bank log files will be saved on your: ${platform.os} 
                            from ${platform.name} Web Browser. 
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                } else if(JSON.parse(localStorage.getItem('banklogs')).length == 3) {        
                    for (var i = 0; i < items.length; i++) {
                        var msgs = [`
                            ${toastbitcoin2} Bitcoin payment not detected,
                            <hr>
                            Scan the bitcoin address and send $${toast2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
                            <hr class="to-hr">
                            Bank log files will be saved on your: ${platform.os} 
                            from ${platform.name} Web Browser. 
                        `];
                        i++;
                        if (i === msgs.length) {
                            i = 0;
                        }
                        return msgs[i];
                    }
                }
            }
        }
    };

    var toastbut = document.getElementById('anon-check');

    $(toastbut).click(function() {
        var shortCutFunction = 'success';
        var msg = '';
        var title = '';
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: 'toast-top-full-width',
            preventDuplicates: true,
            onclick: null
        };
        if (!msg) {
            msg = getMessage();
        }
        var $toast = toastr[shortCutFunction](msg, title);
        $toastlast = $toast;
    });


    var toastbut2 = document.getElementById('monez');

    $(toastbut2).click(function() {
        var shortCutFunction = 'success';
        var msg = '';
        var title = '';
        toastr.options = {
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: 'toast-top-full-width',
            preventDuplicates: true,
            onclick: null
        };
        if (!msg) {
            msg = getMessage();
        }
        var $toast = toastr[shortCutFunction](msg, title);
        $toastlast = $toast;
    });

});