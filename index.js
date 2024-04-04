let mainBox = document.getElementById('root')

mainBox.style.width = '414px';
mainBox.style.height = '890px';
mainBox.style.backgroundColor = '#ffffff36';
mainBox.style.backdropFilter = 'blur(40px)';
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
    // box1.style.background = 'pink';
    box1.style.margin = '0 auto';
    box1.style.display = 'flex';
    box1.style.justifyContent = 'space-between';
    box1.style.alignItems = 'center';
mainBox.appendChild(box1)

let boxClock = document.createElement('div')
    boxClock.style.width = '155px';
    boxClock.style.height = '90px';
box1.appendChild(boxClock)


let clock = document.createElement('div');
    clock.style.fontSize = '48px';
    clock.style.textAlign = 'center';
    clock.style.color = '#fff';
boxClock.appendChild(clock)

let date = document.createElement('div');
    date.style.fontSize = '24px';
    date.style.textAlign = 'center';
    date.style.color = '#fff';
boxClock.appendChild(date)

    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        var timeString = hours + ':' + minutes;

        clock.textContent = timeString;

        var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Суб'];
        var dayOfWeek = days[now.getDay()];

        var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        var month = months[now.getMonth()];
        var dateString = dayOfWeek + ', ' + now.getDate() + ' ' + month + ' ' ;
        date.textContent = dateString;
    }

    updateTime();
    setInterval(updateTime, 1000);


let boxWather = document.createElement('div')
    boxWather.style.width = '155px';
    boxWather.style.height = '90px';
    //boxWather.style.background = 'aqua';
box1.appendChild(boxWather)

    let weatherContainer = document.createElement('div');
        weatherContainer.style.width = '100%'
        weatherContainer.style.height = '100%'
        weatherContainer.style.display = 'flex'
        weatherContainer.style.flexDirection = 'column'
        weatherContainer.style.alignItems = 'center'
        weatherContainer.style.justifyContent = 'center'
    boxWather.appendChild(weatherContainer);

    let weatherInfo = document.createElement('div');
        weatherInfo.style.display = 'flex'
        weatherInfo.style.flexDirection = 'column'
        weatherInfo.style.alignItems = 'center'
        weatherInfo.style.justifyContent = 'center'
        weatherInfo.style.width = '100%'
        weatherInfo.style.height = '100%'
        weatherInfo.style.color = '#fff'
    weatherContainer.appendChild(weatherInfo);

//js weather

document.addEventListener("DOMContentLoaded", function() {
    const pogodaInfo = weatherInfo;
 
    let pogoda = false;
  
    const setWeather = (data) => {
      const name = data.name;
      const temp = pogoda ? (data.main.temp * 1.8 + 32).toFixed(1) + 'F' : data.main.temp.toFixed(1) + '°';
      const weatherCondition = data.weather ? data.weather[0].main : '';
      const tempMax = pogoda ? Math.round(data.main.temp_max * 1.8 + 32) + 'F' : Math.round(data.main.temp_max) + '°';
      const tempMin = pogoda ? Math.round(data.main.temp_min * 1.8 + 32) + 'F' : Math.round(data.main.temp_min) + '°';
  
      pogodaInfo.innerHTML = `
        <div>
          <span>${name}</span>
          <span>${temp}</span>
        </div>
        <div>
          ${weatherCondition && `<img src="https://cdn.pixabay.com/photo/2016/03/18/15/06/fog-1265203_1280.png" alt="Weather" width="50"/>`}
          <span>${weatherCondition}</span>
        </div>
      `;
    };
  
    const fetchWeather = (lat, lon) => {
      const api = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`;
      fetch(api)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error('Ошибка:', error));
    };
  
    // const handleMeter = () => {
    //   fahrenheit = !fahrenheit;
    //   meterButton.innerText = fahrenheit ? 'Celsius' : 'Fahrenheit';
    // };
  
    // meterButton.addEventListener('click', handleMeter);
  
   
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeather(lat, lon);
      }, error => {
        console.error('Ошибка геолокации:', error);
        pogodaInfo.innerText = 'Ошибка получения геолокации';
      });
});
  


let box2 = document.createElement('div')
    box2.style.width = '414px';
    box2.style.height = '450px';
    // box2.style.background = 'coral';
    box2.style.margin = '0 auto';
    box2.style.display = 'flex';
    box2.style.alignItems = 'end';
    box2.style.justifyContent = 'center';
mainBox.appendChild(box2)

let googleBox = document.createElement('div')
    googleBox.style.width = '400px';
    googleBox.style.height = '44px';
    // googleBox.style.background = 'aqua';
    googleBox.style.borderRadius = '30px';
    googleBox.style.display = 'flex';
    googleBox.style.justifyContent = 'center';
    googleBox.style.alignItems = 'center';
box2.appendChild(googleBox)

    let searchInput = document.createElement('input')
        searchInput.style.padding = '20px';
        searchInput.style.width = '360px';
        searchInput.style.height = '44px';
        // searchInput.style.border = '1px solid gray';
        searchInput.style.background = '#fff';
        searchInput.style.border = 'none';
        searchInput.style.fontSize = '16px';
        searchInput.style.outline = 'none';
        searchInput.style.borderTopLeftRadius = '30px';
        searchInput.style.borderBottomLeftRadius = '30px';
        searchInput.placeholder = 'google поиск';
    googleBox.appendChild(searchInput)

    let searchButton = document.createElement('button')
        searchButton.style.padding = '10px 20px';
        searchButton.style.height = '44px';
        searchButton.style.border = 'none';
        searchButton.style.background = 'green';
        searchButton.style.fontSize = '16px';
        searchButton.style.outline = 'none';
        searchButton.textContent = 'поиск';
        searchButton.style.cursor = 'pointer';
        searchButton.style.color = '#fff';
        searchButton.style.borderTopRightRadius = '30px';
        searchButton.style.borderBottomRightRadius = '30px';
    googleBox.appendChild(searchButton)

    document.addEventListener('DOMContentLoaded', function () {
        var srcInt = searchInput;
        var srcBtn = searchButton;

        srcBtn.addEventListener('click', function () {
            var query = srcInt.value;
            if (query.trim() !== '') {
                window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
            }
        });
    });

let box3 = document.createElement('div')
    box3.style.width = '414px';
    box3.style.height = '150px';
    // box3.style.background = 'pink';
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
    // infoBox3.style.background = getRandomColor();
    box3.appendChild(infoBox3)

    //modal 1

    var dialogDiv = document.createElement("div");

    dialogDiv.innerHTML = `
        <button onclick="document.getElementById('modall').showModal()" class="btn1"></button>
        <p class="ptext">Галерея</p>
        <dialog id="modall" class="modalGal">
            <div class="cencel">
                <button onclick="document.querySelector('#modall').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                <button onclick="document.querySelector('#modall').close()">
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
            width: 100%; height: 100%;
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
            background: url('img/free-icon-gallery-5064098.png') no-repeat;
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
            max-height: 660px;
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
    // infoBox32.style.background = getRandomColor();
    box3.appendChild(infoBox32)

//modal 2

    var dialogDiv2 = document.createElement("div");   

    dialogDiv2.innerHTML = `
        
    <button onclick="openModalAppStore()" class="btn2"></button>
    <p class="ptext">App Store</p>

    <style>
        .btn2{
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('img/free-icon-store-5064322.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
    </style>

    `;

    function openModalAppStore() {
        document.location.href = 'https://www.apple.com/app-store/'
    }
    
    function closeModalAppStore() {
        document.getElementById('myModalAppStore').close();
    }

    // function openModal() {
    //     var modalSapp = document.getElementById("myModal");
    //     fetch("App Store - Apple.html")
    //       .then(response => response.text())
    //       .then(data => {
    //         document.getElementById("modalContent").innerHTML = data;
    //         modalSapp.showModal();
    //       })
    //       .catch(error => console.error(error));
    // }
      
    // function closeModal() {
    //     var modalSapp = document.getElementById("myModal");
    //     modalSapp.close();
    // }
      

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
    // infoBox33.style.background = getRandomColor();
    box3.appendChild(infoBox33)

//modal 3

    var dialogDiv3 = document.createElement("div");

    dialogDiv3.innerHTML = `
        <button onclick="document.getElementById('modalUS').showModal()" class="btn3"></button>
        <p class="ptext">Настройки</p>
        <dialog id="modalUS" class="modalGal">
            <div class="cencel">
                <button onclick="document.querySelector('#modalUS').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                <button onclick="document.querySelector('#modalUS').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
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
            background: url('img/free-icon-setting-5064298.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
    </style>
    `;

    dialogDiv3.classList.add("exampleDiv");

    infoBox33.appendChild(dialogDiv3);

    let settings = document.getElementById("modalUS");
        let containerSettings = document.createElement('div');
        //css
        var boxStyles = {
            width: '370px',
            height: '50px',
            margin: '10px',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
            color: '#000'
        };

        var boxesData = [
            { imgUrl: "img/01.svg", text: "О телефоне" },
            { imgUrl: "img/02.svg", text: "Обновление компонентов" },
            { imgUrl: "img/03.svg", text: "Состояние" },
            { imgUrl: "img/04.svg", text: "SIM и мобильные сети" },
            { imgUrl: "img/05.svg", text: "Wi-Fi" },
            { imgUrl: "img/06.svg", text: "Bluetooth" },
            { imgUrl: "img/07.svg", text: "Точка доступа Wi-Fi" },
            { imgUrl: "img/08.svg", text: "Экран и блокировка" },
            { imgUrl: "img/09.svg", text: "Яркость" },
            { imgUrl: "img/10.svg", text: "Звук и выбрация" },
            { imgUrl: "img/11.svg", text: "Уведомления" },
            { imgUrl: "img/12.svg", text: "Рабочий стол" },
            { imgUrl: "img/13.svg", text: "Обои" },
            { imgUrl: "img/14.svg", text: "Темы" },
            { imgUrl: "img/15.svg", text: "Пароль и безопасность" },
            { imgUrl: "img/16.svg", text: "Батарея" },
            { imgUrl: "img/17.svg", text: "Приложения" },
            { imgUrl: "img/18.svg", text: "Расширенные настройки" },
            { imgUrl: "img/19.svg", text: "Аккаунт" },
            { imgUrl: "img/20.svg", text: "Google" },
            { imgUrl: "img/21.svg", text: "Конфиденциальность" }
        ];

        boxesData.forEach(function(data) {
            var box = document.createElement('div');
            Object.assign(box.style, boxStyles);
            
            //img
            var imgElement = document.createElement('img');
            imgElement.src = data.imgUrl;
            imgElement.style.width = '25px';
            imgElement.style.height = '25px';
            imgElement.style.margin = '20px';
            imgElement.style.color = 'white';
            box.appendChild(imgElement);
            containerSettings.appendChild(box);
            
            //text
            var textElement = document.createElement('div');
            textElement.textContent = data.text;
            box.appendChild(textElement);
        });

    settings.appendChild(containerSettings);


    //bbox4
    var infoBox34 = document.createElement('div')
    // infoBox34.textContent = 'box' + (i+1);
    infoBox34.style.width = '100px';
    infoBox34.style.height = '120px';
    infoBox34.style.display = 'flex';
    infoBox34.style.alignItems = 'center';
    infoBox34.style.justifyContent = 'center';
    // infoBox34.style.background = getRandomColor();
    box3.appendChild(infoBox34)

    //modal 4

    var dialogDiv4 = document.createElement("div");

    dialogDiv4.innerHTML = `
        <button onclick="document.getElementById('modalFiles').showModal()" class="btn4"></button>
        <p class="ptext">Файлы</p>
        <dialog id="modalFiles" class="modalGal">
            <div class="cencel">
                <button onclick="document.querySelector('#modalFiles').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                <button onclick="document.querySelector('#modalFiles').close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
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
            background: url('img/free-icon-video-5064365.png') no-repeat;
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

    let box4files = document.getElementById("modalFiles");
        var boxFiles = document.createElement('div');
        boxFiles.style.display = 'flex';
        boxFiles.style.flexWrap = 'wrap'
        //css
        var boxFilesStyles = {
            width: '70px',
            height: '70px',
            margin: '10px',
            borderRadius: '15px',
            cursor: 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };

        var boxesFilesData = [
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/folder-fill.svg"},
            { imgUrl: "img/10.svg"}
        ];

        boxesFilesData.forEach(function(data) {
            var boxF = document.createElement('div');
            Object.assign(boxF.style, boxFilesStyles);
            
            //img
            var imgElement = document.createElement('img');
            imgElement.src = data.imgUrl;
            imgElement.style.width = '100%';
            imgElement.style.height = '100%';
            imgElement.style.backgroundPosition = 'center';
            imgElement.style.color = 'white';
            boxF.appendChild(imgElement);
            boxFiles.appendChild(boxF);
        });

    box4files.appendChild(boxFiles);



function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb('+r+','+g+','+b+')';
}

let box4 = document.createElement('div')
    box4.style.width = '414px';
    box4.style.height = '160px';
    box4.style.margin = '0 auto';
    box4.style.display = 'flex';
    box4.style.alignItems = 'center';
    box4.style.justifyContent = 'center';
mainBox.appendChild(box4)

// for(i=0; i<4; i++){
var infoBox41 = document.createElement('div')
    // infoBox41.textContent = 'box' + (i+1);
    infoBox41.style.width = '100px';
    infoBox41.style.height = '120px';
    infoBox41.style.display = 'flex';
    infoBox41.style.alignItems = 'center';
    infoBox41.style.justifyContent = 'center';
    // infoBox41.style.background = getRandomColor();
    box4.appendChild(infoBox41)
// }

var callBox = document.createElement("div");

callBox.innerHTML = `
    <button onclick="document.getElementById('modalPhone').showModal()" class="btn5"></button>  
    <dialog id="modalPhone" class="modalGal">
        <div class="cencel">
            <button onclick="document.querySelector('#modalPhone').close()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>

            <button onclick="document.querySelector('#modalPhone').close()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
    </dialog>
<style>
    .btn5{
        width: 85px;
        height: 85px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        background: url('img/free-icon-phone-5064202.png') no-repeat;
        background-size: cover;
        background-position: center;
        margin: 0 auto;
    }
    .ptext{
        color: #fff;
        margin: 0 auto;
    }

    .phone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .keyboard {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 13px;
    }
    .number, .call {
        width: 90px;
        height: 70px;
        border-radius: 50px;
        border: none;
        background-color: #fff;
        box-shadow: 2px 2px 6px black;
        font-size: 24px;
        cursor: pointer;
        margin: 6px;
    }
    .call{
        width: 200px;
        height: 70px;
        background-color: rgb(20, 184, 20);
        color: #fff;
    }
</style>

`;

callBox.classList.add("exampleDiv");

infoBox41.appendChild(callBox);

let modalPhone = document.getElementById('modalPhone');


document.addEventListener("DOMContentLoaded", function() {
    const phoneDiv = document.createElement('div');
    phoneDiv.id = 'phone';
    phoneDiv.classList.add('phone');
  
    const numberInput = document.createElement('input');
    numberInput.type = 'text';
    numberInput.id = 'number';
    numberInput.classList.add('number-input');
    numberInput.placeholder = 'Введите номер';
    numberInput.style.width = '300px';
    numberInput.style.height = '40px';
    numberInput.style.marginBottom = '20px';
    numberInput.style.outline = 'none';
    numberInput.style.border = 'none';
    numberInput.style.borderBottom = '1px solid gray';
    numberInput.style.padding = '15px';
    numberInput.style.fontSize = '20px';
    phoneDiv.appendChild(numberInput);


    const keyboardDiv = document.createElement('div');
    keyboardDiv.classList.add('keyboard');
  
    const buttonsLayout = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['+', '0', '#']
    ];
  
buttonsLayout.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    row.forEach(digit => {
        const button = document.createElement('button');
        button.classList.add('number');
        button.textContent = digit;
        button.addEventListener('click', () => {
          const inputDigit = button.textContent;
          if (inputDigit === '+' || inputDigit === '#' || !isNaN(parseInt(inputDigit))) {
            numberInput.value += inputDigit;
          }
        });
        rowDiv.appendChild(button);
    });
    keyboardDiv.appendChild(rowDiv);
});
  
const callButton = document.createElement('button');
    callButton.id = 'call';
    callButton.classList.add('call');
    callButton.textContent = 'Позвонить';
    callButton.addEventListener('click', () => {
    const phoneNumber = numberInput.value.trim();
    if (phoneNumber !== '') {
        alert(`Вызов номера: ${phoneNumber}`);
        numberInput.value = '';
    } else {
        alert('Пожалуйста, введите номер телефона');
    }
  });
  
    keyboardDiv.appendChild(callButton);
    phoneDiv.appendChild(keyboardDiv);
  
    modalPhone.appendChild(phoneDiv);
});



//2
var infoBox42 = document.createElement('div')
    // infoBox42.textContent = 'box' + (i+1);
    infoBox42.style.width = '100px';
    infoBox42.style.height = '120px';
    infoBox42.style.display = 'flex';
    infoBox42.style.alignItems = 'center';
    infoBox42.style.justifyContent = 'center';
    //infoBox42.style.background = getRandomColor();
    box4.appendChild(infoBox42)


    var telegramBox = document.createElement("div");

    telegramBox.innerHTML = `
    <button onclick="openModalTelegram()" class="btn6"></button>

    <style>
        .btn6{
            width: 85px;
            height: 85px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('img/free-icon-message-5064161.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
    </style>
    
    `;
    
    telegramBox.classList.add("exampleDiv");
    
    infoBox42.appendChild(telegramBox);

    //

    function openModalTelegram() {
        document.location.href = 'https://web.telegram.org/a/'
    }
    
    function closeModalTelegram() {
        document.getElementById('myModalTelegram').close();
    }

    // 
    
//3
var infoBox43 = document.createElement('div')
    // infoBox43.textContent = 'box' + (i+1);
    infoBox43.style.width = '100px';
    infoBox43.style.height = '120px';
    infoBox43.style.display = 'flex';
    infoBox43.style.alignItems = 'center';
    infoBox43.style.justifyContent = 'center';
    //infoBox43.style.background = getRandomColor();
    box4.appendChild(infoBox43)


    var internetBox = document.createElement("div");

    internetBox.innerHTML = `
    <button onclick="openModalInternet()" class="btn7"></button>

    <style>
        .btn7{
            width: 85px;
            height: 85px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            background: url('img/free-icon-internet-5064120.png') no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
        }
    </style>
    
    `;
    

    function openModalInternet() {
        document.location.href = 'https://www.google.com'
    }
    
    function closeModalInternet() {
        document.getElementById('myModalInternet').close();
    }

    internetBox.classList.add("exampleDiv");
    
    infoBox43.appendChild(internetBox);


//4
var infoBox44 = document.createElement('div')
    // infoBox44.textContent = 'box' + (i+1);
    infoBox44.style.width = '100px';
    infoBox44.style.height = '120px';
    infoBox44.style.display = 'flex';
    infoBox44.style.alignItems = 'center';
    infoBox44.style.justifyContent = 'center';
    //infoBox44.style.background = getRandomColor();
    box4.appendChild(infoBox44)


    // var cameraBox = document.createElement("div");

    // cameraBox.innerHTML = `
    // <button onclick="openModalCamera()" class="btn8"></button>
    // <dialog id="myModalCamera" class="modalGal">
    //     <div class="cencel">
    //         <button onclick="closeModalCamera()" id="closeModalCamera">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    //                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    //             </svg>
    //         </button>

    //         <button onclick="closeModalCamera()" id="closeModalCamera">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    //                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    //             </svg>
    //         </button>
    //     </div>
    //     <div class="camera"></div>
    // </dialog>

    // <style>
    //     .btn8{
    //         width: 85px;
    //         height: 85px;
    //         background-color: transparent;
    //         border: none;
    //         cursor: pointer;
    //         background: url('img/free-icon-play-button-5064229.png') no-repeat;
    //         background-size: cover;
    //         background-position: center;
    //         margin: 0 auto;
    //     }
    //     .ptext{
    //         color: #fff;
    //         margin: 0 auto;
    //     }
    //     .camera{
    //         width: 100%;
    //         height: 90%;
    //         background: red;
    //     }
    // </style>
    
    // `;
    
    // function openModalCamera() {
    //     document.getElementById('myModalCamera').showModal();
    // }
    
    // function closeModalCamera() {
    //     document.getElementById('myModalCamera').close();
    // }

    // cameraBox.classList.add("exampleDiv");
    
    // infoBox44.appendChild(cameraBox);

// Создаем элементы
const cameraBox = document.createElement("div");
cameraBox.classList.add("exampleDiv");

const button = document.createElement("button");
button.classList.add("btn8");
button.style.width = "85px";
button.style.height = "85px";
button.style.backgroundColor = "transparent";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.background = "url('img/free-icon-play-button-5064229.png') no-repeat";
button.style.backgroundSize = "cover";
button.style.backgroundPosition = "center";
button.style.margin = "0 auto";
button.onclick = openModalCamera;

const dialog = document.createElement("dialog");
dialog.id = "myModalCamera";
dialog.classList.add("modalGal");

const closeButton1 = createCloseButton();
const closeButton2 = createCloseButton();

const cameraDiv = document.createElement("div");
cameraDiv.classList.add("camera");
cameraDiv.style.width = "100%";
cameraDiv.style.height = "100%";

const video = document.createElement('video');
video.id = 'video';
video.width = 390;
video.height = 480;
video.autoplay = true;

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.width = 90;
canvas.height = 90;

const snapButton = document.createElement('button');
snapButton.id = 'snap';
snapButton.textContent = '.';
snapButton.style.width = '70px';
snapButton.style.height = '70px';
snapButton.style.display = 'flex';
snapButton.style.justifyContent = 'center';
snapButton.style.alignItems = 'center';
// snapButton.style.fontSize = '70px';
snapButton.style.background = '#fff';
snapButton.style.borderRadius = '50%';
snapButton.style.border = 'none';
snapButton.style.margin = '0 auto';
snapButton.style.boxShadow = '1px 1px 10px gray';

cameraDiv.appendChild(video);
cameraDiv.appendChild(canvas);
cameraDiv.appendChild(snapButton);

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("Ошибка при доступе к камере: " + err);
    });

function takeSnapshot() {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

snapButton.addEventListener('click', function() {
    takeSnapshot();
});


cameraBox.appendChild(button);
cameraBox.appendChild(dialog);
dialog.appendChild(closeButton1);
dialog.appendChild(closeButton2);
dialog.appendChild(cameraDiv);
infoBox44.appendChild(cameraBox);

//кнопкa закрытия
function createCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.onclick = closeModalCamera;
    closeButton.id = "closeModalCamera";
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "bi bi-x");
    svg.setAttribute("viewBox", "0 0 16 16");
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708");
    
    svg.appendChild(path);
    closeButton.appendChild(svg);
    
    return closeButton;
}


function openModalCamera() {
    const dialog = document.getElementById('myModalCamera');
    dialog.showModal();
}
function closeModalCamera() {
    const dialog = document.getElementById('myModalCamera');
    dialog.close();
}
