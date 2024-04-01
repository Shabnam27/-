let mainBox = document.getElementById('root')

mainBox.style.width = '414px';
mainBox.style.height = '890px';
mainBox.style.background = 'gray';
mainBox.style.margin = '0 auto';

let menu = document.createElement('div')
    menu.style.width = '414px';
    menu.style.height = '30px';
    menu.style.background = 'black';
    menu.style.margin = '0 auto';
mainBox.appendChild(menu)

let box1 = document.createElement('div')
    box1.style.width = '414px';
    box1.style.height = '100px';
    box1.style.background = 'pink';
    box1.style.margin = '0 auto';
    box1.style.display = 'flex';
    box1.style.alignItems = 'center';
    box1.style.justifyContent = 'space-between';
mainBox.appendChild(box1)

let boxClock = document.createElement('div')
    boxClock.style.width = '155px';
    boxClock.style.height = '90px';
    boxClock.style.background = 'gold';
box1.appendChild(boxClock)

let boxWather = document.createElement('div')
    boxWather.style.width = '155px';
    boxWather.style.height = '90px';
    boxWather.style.background = 'aqua';
box1.appendChild(boxWather)


let box2 = document.createElement('div')
    box2.style.width = '414px';
    box2.style.height = '450px';
    box2.style.background = 'coral';
    box2.style.margin = '0 auto';
    box2.style.display = 'flex';
    box2.style.alignItems = 'end';
    box2.style.justifyContent = 'center';
mainBox.appendChild(box2)

let boxSearch = document.createElement('div')
    boxSearch.style.width = '400px';
    boxSearch.style.height = '44px';
    boxSearch.style.background = 'aqua';
    boxSearch.style.borderRadius = '30px'
box2.appendChild(boxSearch)


let box3 = document.createElement('div')
    box3.style.width = '414px';
    box3.style.height = '150px';
    box3.style.background = 'pink';
    box3.style.margin = '0 auto';
    box3.style.display = 'flex';
    box3.style.alignItems = 'center';
    box3.style.justifyContent = 'center';
mainBox.appendChild(box3)

//for(i=0; i<4; i++){
    var infoBox3 = document.createElement('div')
    // infoBox3.textContent = 'box' + (i+1);
    infoBox3.style.width = '100px';
    infoBox3.style.height = '120px';
    infoBox3.style.display = 'flex';
    infoBox3.style.alignItems = 'center';
    infoBox3.style.justifyContent = 'center';
    infoBox3.style.background = getRandomColor();
    box3.appendChild(infoBox3)

    //modal 1

    var dialogDiv = document.createElement("div");

    dialogDiv.innerHTML = `
        <button onclick="document.getElementById('modal').showModal()" class="btn1"></button>
        <p class="ptext">Галерея</p>
        <dialog id="modal" class="modalGal">
            <p>Hi!</p>
            <div>
                <button onclick="document.querySelector('dialog').close()">cancel</button>
            </div>
        </dialog>
    <style>
        .modalGal{
            width: 100%; height: 99%;
            margin: 0 auto;
            backdrop-filter: blur(40px);
            background-color: #ffffff36;
        }
        .exampleDiv {
            width: 90px;
            height: 90px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        .btn1{
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('https://cdn.pixabay.com/photo/2016/10/10/01/49/gallery-1727481_1280.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
        .ptext{
            color: #fff;
            margin: 0 auto;
        }
    </style>
    
    `;

dialogDiv.classList.add("exampleDiv");

infoBox3.appendChild(dialogDiv);

//}
//bbox2
    var infoBox32 = document.createElement('div')
    // infoBox32.textContent = 'box' + (i+1);
    infoBox32.style.width = '100px';
    infoBox32.style.height = '120px';
    infoBox32.style.display = 'flex';
    infoBox32.style.alignItems = 'center';
    infoBox32.style.justifyContent = 'center';
    infoBox32.style.background = getRandomColor();
    box3.appendChild(infoBox32)

//modal 2

    var dialogDiv2 = document.createElement("div");

    dialogDiv2.innerHTML = `
        <button onclick="document.getElementById('modal').showModal()" class="btn2"></button>
        <p class="ptext">Google Play</p>
        <dialog id="modal">
            <p>Hi!</p>
            <div>
                <button>Yes</button>
                <button onclick="document.querySelector('dialog').close()">cancel</button>
            </div>
        </dialog>
    <style>
        .btn2{
            width: 60px;
            height: 70px;
            border-radius: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_1280.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
        .ptext{
            color: #fff;
            margin: 0 auto;
        }
    </style>

    `;

    dialogDiv2.classList.add("exampleDiv");

    infoBox32.appendChild(dialogDiv2);

//bbox3
    var infoBox33 = document.createElement('div')
    // infoBox33.textContent = 'box' + (i+1);
    infoBox33.style.width = '100px';
    infoBox33.style.height = '120px';
    infoBox33.style.display = 'flex';
    infoBox33.style.alignItems = 'center';
    infoBox33.style.justifyContent = 'center';
    infoBox33.style.background = getRandomColor();
    box3.appendChild(infoBox33)

//modal 3

    var dialogDiv3 = document.createElement("div");

    dialogDiv3.innerHTML = `
        <button onclick="document.getElementById('modal').showModal()" class="btn3"></button>
        <p class="ptext">Настройки</p>
        <dialog id="modal">
            <p>Hi!</p>
            <div>
                <button>Yes</button>
                <button onclick="document.querySelector('dialog').close()">cancel</button>
            </div>
        </dialog>
    <style>
        .btn3{
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('https://cdn.pixabay.com/photo/2021/02/18/09/21/icon-6026657_1280.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
        .ptext{
            color: #fff;
            margin: 0 auto;
        }
    </style>

    `;

    dialogDiv3.classList.add("exampleDiv");

    infoBox33.appendChild(dialogDiv3);


    //bbox4
    var infoBox34 = document.createElement('div')
    // infoBox34.textContent = 'box' + (i+1);
    infoBox34.style.width = '100px';
    infoBox34.style.height = '120px';
    infoBox34.style.display = 'flex';
    infoBox34.style.alignItems = 'center';
    infoBox34.style.justifyContent = 'center';
    infoBox34.style.background = getRandomColor();
    box3.appendChild(infoBox34)

    //modal 4

    var dialogDiv4 = document.createElement("div");

    dialogDiv4.innerHTML = `
        <button onclick="document.getElementById('modal').showModal()" class="btn4"></button>
        <p class="ptext">Файлы</p>
        <dialog id="modal">
            <p>Hi!</p>
            <div>
                <button>Yes</button>
                <button onclick="document.querySelector('dialog').close()">cancel</button>
            </div>
        </dialog>
    <style>
        .btn4{
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('https://cdn.pixabay.com/photo/2013/04/01/09/16/folder-98462_1280.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
        .ptext{
            color: #fff;
            margin: 0 auto;
        }
    </style>

    `;

    dialogDiv4.classList.add("exampleDiv");

    infoBox34.appendChild(dialogDiv4);


function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb('+r+','+g+','+b+')';
}






let box4 = document.createElement('div')
    box4.style.width = '414px';
    box4.style.height = '160px';
    box4.style.background = 'blue';
    box4.style.margin = '0 auto';
    box4.style.display = 'flex';
    box4.style.alignItems = 'center';
    box4.style.justifyContent = 'center';
mainBox.appendChild(box4)

for(i=0; i<4; i++){
    var infoBox4 = document.createElement('div')
    infoBox4.textContent = 'box' + (i+1);
    infoBox4.style.width = '100px';
    infoBox4.style.height = '120px';
    infoBox4.style.background = getRandomColor();
    box4.appendChild(infoBox4)
}