let items = [];

var table1 = jQuery('#example1').DataTable();

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){

    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance =`<td class="btn-balance">${data.balance}</td>`
        var account = `<td>${data.account}</td>`
        var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,      
        ]).draw();
    });

    for(var i = 0; i < items.length; i++) {
        if((items[i].account).includes('PACKAGE')) {
            if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING') || (items[i].account).includes('CURRENT') || (items[i].account).includes('CHEQUING') || (items[i].account).includes('ULTIMATE')){
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'View: ');
                var cartItems3 = document.getElementsByClassName('xenon3')[0];
                var cartRowContents3 = `
                    <div class="pricing-list highlight">
                        <div class="pricing-list-price">
                            <h2 class="text-white">${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li class="text-white">${items[i].website} </li>
                            <li class="text-white">${items[i].info1} </li>
                            <li class="text-white">${items[i].info2} </li>
                            <li class="text-white">${items[i].info3} </li>
                            <li class="text-white">${items[i].info4} </li>
                            <li class="text-white">${items[i].info5} </li>
                            <li class="text-white">${items[i].info6} </li>
                            <li class="text-white">${(items[i].account).replace('[','<br>[')}</li>
                            <button type="submit" class="butn white">
                                ${price3}
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            } else {
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'View: ');
                var cartItems3 = document.getElementsByClassName('xenon3')[0];
                var cartRowContents3 = `
                    <div class="pricing-list">
                        <div class="pricing-list-price">
                            <h2>${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li>${items[i].website} </li>
                            <li>${items[i].info1} </li>
                            <li>${items[i].info2} </li>
                            <li>${items[i].info3} </li>
                            <li>${items[i].info4} </li>
                            <li>${items[i].info5} </li>
                            <li>${items[i].info6} </li>
                            <li>${(items[i].account).replace('[','<br>[')}</li>
                            <button type="submit" class="butn">
                                ${price3}
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            }
        } else {
            if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING') || (items[i].account).includes('CURRENT') || (items[i].account).includes('CHEQUING') || (items[i].account).includes('ULTIMATE')){
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'View: ');
                var cartItems3 = document.getElementsByClassName('xenon3')[0];
                var cartRowContents3 = `
                    <div class="pricing-list highlight">
                        <div class="pricing-list-price">
                            <h2 class="text-white">${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li class="text-white">${items[i].website} </li>
                            <li class="text-white">${items[i].info1} </li>
                            <li class="text-white">${items[i].info2} </li>
                            <li class="text-white">${items[i].info3} </li>
                            <li class="text-white">${items[i].info4} </li>
                            <li class="text-white">${items[i].info5} </li>
                            <li class="text-white">${items[i].info6} </li>
                            <li class="text-white">${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                            <button type="submit" class="butn white" data-bs-toggle="modal" data-bs-target="#saveModal">
                                ${price3}
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            } else {
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'View: ');
                var cartItems3 = document.getElementsByClassName('xenon3')[0];
                var cartRowContents3 = `
                    <div class="pricing-list">
                        <div class="pricing-list-price">
                            <h2>${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li>${items[i].website} </li>
                            <li>${items[i].info1} </li>
                            <li>${items[i].info2} </li>
                            <li>${items[i].info3} </li>
                            <li>${items[i].info4} </li>
                            <li>${items[i].info5} </li>
                            <li>${items[i].info6} </li>
                            <li>${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                            <button type="submit" class="butn" data-bs-toggle="modal" data-bs-target="#saveModal">
                                ${price3}
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            }
        }
    }

    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
} else {
    document.getElementById('logsection').style.display = 'none';
    document.getElementById('logsection2').style.display = 'none';
    document.getElementById('cartlength').style.display = 'none';
}


if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 3)){
    document.getElementsByClassName('dataTables_paginate')[0].style.display = 'block';
    document.getElementsByClassName('dataTables_length')[0].style.display = 'block'
}

function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;
    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
}


function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    var downFile = document.getElementById('down-file');
    var showToast = document.getElementById('showtoasts');
    var anonP = document.getElementById('anon-p');
    var anonCheck = document.getElementById('anon-check');
    var titleLog2 = document.getElementById('titlelogs2');
    var modalAmount = document.getElementById('modal-amount');

    var discountTotal = parseInt((total * 0.9).toFixed(0));
    localStorage.setItem('divtotal', discountTotal);
    var disTot = localStorage.getItem('divtotal');

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        const bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
        const bankBal = (JSON.parse(localStorage.getItem('banklogs'))[0].balance);
        const bankImg = (JSON.parse(localStorage.getItem('banklogs'))[0].image);

        const banking1 = (JSON.parse(localStorage.getItem('banklogs'))[0].info1);
        const banking2 = (JSON.parse(localStorage.getItem('banklogs'))[0].info2);
        const banking3 = (JSON.parse(localStorage.getItem('banklogs'))[0].info3);
        const banking4 = (JSON.parse(localStorage.getItem('banklogs'))[0].info4);
        const banking5 = (JSON.parse(localStorage.getItem('banklogs'))[0].info5);
        const banking6 = (JSON.parse(localStorage.getItem('banklogs'))[0].info6);

        if(bankLog.includes('Huntington') || bankLog.includes('Woodforest') || bankLog.includes('Barclays')) {
            downFile.innerHTML = bankLog.split('Bank')[0];
        } else if(bankLog.includes('America')) {
            downFile.innerHTML = 'BankofAmerica';
        } else {
            downFile.innerHTML = bankLog.split('[')[0];
        }

        showToast.innerHTML = `
            Download 1 Bank Log <img src="img/partners/doh.png">
        `;
        anonCheck.innerHTML = `
            Download File <img src=${bankImg}>
        `;

        anonP.innerHTML = `
            ${bankLog.replace(']',' ACCOUNT]')} with <span>${bankBal}</span> <hr class="thehr">
            ${banking1}, ${banking2}, ${banking3}, ${banking4}, ${banking5}, ${banking6}
        `;
        titleLog2.innerHTML = `
            Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, 
            Total: $<span class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

        modalAmount.innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;
        document.getElementById('disb').style.display = 'none';
    } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1 && JSON.parse(localStorage.getItem('banklogs')).length <= 3) {
        var Loginz = (JSON.parse(localStorage.getItem('banklogs')));

        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('p');
            var logItems = document.getElementById('anon-p');
            logRow.innerHTML = `
                <hr class="thehr" style="margin-top: -10px !important"> 
                ${Loginz[i].account.replace(']', ' ACCOUNT]')} with 
                <span>${Loginz[i].balance}</span>
            `;
            logItems.prepend(logRow);
        }
        
        showToast.innerHTML = `
            Download ${JSON.parse(localStorage.getItem('banklogs')).length} Bank Logs
            <img src="img/partners/doh.png">
        `;
        anonCheck.innerHTML = `
            Download ${JSON.parse(localStorage.getItem('banklogs')).length} Files
            <img src="img/partners/doh.png">
        `;

        downFile.innerHTML = 'Bank Log Files';

        titleLog2.innerHTML = `
            Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, 
            Total: $<span class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

        modalAmount.innerHTML = `
            Send  <span id="omanyala3">$</span> 
            <span id="omanyala2" class="countup">${parseInt(total).toLocaleString()}</span> 
            $<span id="omanyala" class="countup">${parseInt(disTot).toLocaleString()}</span>
        `;
        document.getElementById('bitcoin-logo').style.display = 'none';
    } 
localStorage.setItem('banktotal',total);
}