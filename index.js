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
        <button onclick="document.getElementById('modall').showModal()" class="btn1"></button>
        <p class="ptext">Галерея</p>
        <dialog id="modall" class="modalGal">
            <div class="cencel">
                <button onclick="document.querySelector('dialog').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                <button onclick="document.querySelector('dialog').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
            <div class="body">
                    <section class='gallery'>
                        <div class='item nohover' data-pos='0'><img src="https://picsum.photos/id/1/640/480"></div>
                        <div class='item' data-pos='1'><img src="https://picsum.photos/id/17/640/480"></div>
                        <div class='item' data-pos='2'><img src="https://picsum.photos/id/20/640/480"></div>
                        <div class='item' data-pos='3'><img src="https://picsum.photos/id/39/640/480"></div>
                        <div class='item' data-pos='4'><img src="https://picsum.photos/id/43/640/480"></a></div>
                        <div class='item' data-pos='5'><img src="https://picsum.photos/id/76/640/480"></a></div>
                        <div class='item' data-pos='6'><img src="https://picsum.photos/id/84/640/480"></a></div>
                        <div class='item' data-pos='7'><img src="https://picsum.photos/id/103/640/480"></a></div>
                        <div class='item' data-pos='8'><img src="https://picsum.photos/id/110/640/480"></a></div>
                        <div class='item' data-pos='9'><img src="https://picsum.photos/id/130/640/480"></a></div>
                        <div class='item' data-pos='10'><img src="https://picsum.photos/id/137/640/480"></a></div>
                        <div class='item' data-pos='11'><img src="https://picsum.photos/id/196/640/480"></a></div>
                    </section>
            </div>
        
        </dialog>
    <style>
        :root {
            --minFontSize: 10px;
            --maxFontSize: 24px;
            --scaler: 5vw;
        }      
        .cencel{
            width: 90%; height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin:0 auto;
        }
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

        .body {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow-y: auto; 
            max-height: 640px;
          }
          
          .gallery {
              position: relative;
              width: 90%;
              aspect-ratio: 5/3;
              background-color: black;
              border: 4px solid transparent;
          
              &:hover :not(div[data-pos='0'],img) { cursor: pointer; }
          
              & .item {
                  --ImgSizeX: 20%;
                  --ImgSizeY: 25%;
                  position: absolute;
                  width: var(--ImgSizeX);
                  height: var(--ImgSizeY);
          
                  & img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  }
                  & img:hover {
                  border: 2px solid transparent;
                  }
              }
          
              & div[data-pos='0'] { 
                  width: calc(var(--ImgSizeX) * 3);
                  height: calc(var(--ImgSizeY) * 3);
                  pointer-events: none;
                  transition: width .25s, height .25s;
              }
              }
          
              div[data-pos='0'] { transform: translate(0%,0%); }
              div[data-pos='1'] { transform: translate(300%,0%); }
              div[data-pos='2'] { transform: translate(400%,0%); }
              div[data-pos='3'] { transform: translate(300%,100%); }
              div[data-pos='4'] { transform: translate(400%,100%); }
              div[data-pos='5'] { transform: translate(300%,200%); }
              div[data-pos='6'] { transform: translate(400%,200%); }
              div[data-pos='7'] { transform: translate(0%,300%); }
              div[data-pos='8'] { transform: translate(100%,300%); }
              div[data-pos='9'] { transform: translate(200%,300%); }
              div[data-pos='10'] { transform: translate(300%,300%); }
              div[data-pos='11'] { transform: translate(400%,300%); }
          

    </style>
    
    `;

    function Switch(el) {
        if (!el.target.closest('.item')) return;
        let origin = document.querySelector('div[data-pos="0"]');
        let target = el.target.parentElement;
        [target.dataset.pos,origin.dataset.pos] = [origin.dataset.pos,target.dataset.pos];
    }
    
    window.addEventListener('click', Switch, false);


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