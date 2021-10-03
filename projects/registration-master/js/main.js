        
//        Глобальные переменные,
        let n=0;
        let p=0; //для процентовки пароля,
        let r=0; //для процентовки повторите пароля,
        let l=0;
        let e=0;
        let c=0;
        
        let k=0;
        
        let type;

        const contries = [
            {contriename: "Абхазия"},
            {contriename: "Австралия"},
            {contriename: "Австрия"},
            {contriename: "Азербайджан"},
            {contriename: "Албания"},
            {contriename: "Алжир"},
            {contriename: "Ангола"},
            {contriename: "Андорра"},
            {contriename: "Антигуа и Барбуда"},
            {contriename: "Аргентина"},
            {contriename: "Армения"},
            {contriename: "Аруба"},
            {contriename: "Афганистан"},
            {contriename: "Багамы"},
            {contriename: "Бангладеш"},
            {contriename: "Барбадос"},
            {contriename: "Бахрейн"},
            {contriename: "Беларусь"},
            {contriename: "Белиз"},
            {contriename: "Бельгия"},
            {contriename: "Бенин"},
            {contriename: "Бермудские острова"},
            {contriename: "Болгария"},
            {contriename: "Боливия"},
            {contriename: "Босния и Герцеговина"},
            {contriename: "Ботсвана"},
            {contriename: "Бразилия"},
            {contriename: "Бруней"},
            {contriename: "Буркина Фасо"},
            {contriename: "Бурунди"},
            {contriename: "Бутан"},
            {contriename: "Вануату"},
            {contriename: "Ватикан"},
            {contriename: "Великобритания"},
            {contriename: "Венгрия"},
            {contriename: "Венесуэла"},
            {contriename: "Вьетнам"},
            {contriename: "Габон"},
            {contriename: "Гавайские острова"},
            {contriename: "Гайана"},
            {contriename: "Гаити"},
            {contriename: "Гамбия"},
            {contriename: "Гана"},
            {contriename: "Гваделупа"},
            {contriename: "Гватемала"},
            {contriename: "Гвинея"},
            {contriename: "Гвинея-Бисау"},
            {contriename: "Германия"},
            {contriename: "Гондурас"},
            {contriename: "Гонконг"},
            {contriename: "Гренада"},
            {contriename: "Греция"},
            {contriename: "Грузия"},
            {contriename: "Дания"},
            {contriename: "Джибути"},
            {contriename: "Доминика"},
            {contriename: "Доминикана"},
            {contriename: "Египет"},
            {contriename: "Замбия"},
            {contriename: "Зимбабве"},
            {contriename: "Израиль"},
            {contriename: "Израиль"},
            {contriename: "Индонезия"},
            {contriename: "Иордания"},
            {contriename: "Ирак"},
            {contriename: "Иран"},
            {contriename: "Ирландия"},
            {contriename: "Исландия"},
            {contriename: "Испания"},
            {contriename: "Италия"},
            {contriename: "Йемен"},
            {contriename: "Кабо-Верде"},
            {contriename: "Казахстан"},
            {contriename: "Каймановы острова"},
            {contriename: "Камбоджа"},
            {contriename: "Камерун"},
            {contriename: "Канада"},
            {contriename: "Канарские острова"},
            {contriename: "Катар"},
            {contriename: "Кения"},
            {contriename: "Кипр"},
            {contriename: "Киргизия"},
            {contriename: "Кирибати"},
            {contriename: "Китай"},
            {contriename: "Колумбия"},
            {contriename: "Коморы"},
            {contriename: "Конго"},
            {contriename: "Конго-Киншаса"},
            {contriename: "Коста-Рика"},
            {contriename: "Кот-д’Ивуар"},
            {contriename: "Куба"},
            {contriename: "Кувейт"},
            {contriename: "Лаос"},
            {contriename: "Латвия"},
            {contriename: "Лесото"},
            {contriename: "Либерия"},
            {contriename: "Ливан"},
            {contriename: "Ливия"},
            {contriename: "Литва"},
            {contriename: "Лихтенштейн"},
            {contriename: "Люксембург"},
            {contriename: "Маврикий"},
            {contriename: "Мавритания"},
            {contriename: "Мадагаскар"},
            {contriename: "Македония"},
            {contriename: "Малави"},
            {contriename: "Малайзия"},
            {contriename: "Мали"},
            {contriename: "Мальдивы"},
            {contriename: "Мальта"},
            {contriename: "Марокко"},
            {contriename: "Мартиника"},
            {contriename: "Маршалловы острова"},
            {contriename: "Мексика"},
            {contriename: "Мозамбик"},
            {contriename: "Молдова"},
            {contriename: "Монако"},
            {contriename: "Монголия"},
            {contriename: "Мьянма"},
            {contriename: "Намибия"},
            {contriename: "Науру"},
            {contriename: "Непал"},
            {contriename: "Нигер"},
            {contriename: "Нигерия"},
            {contriename: "Нидерланды"},
            {contriename: "Никарагуа"},
            {contriename: "Новая Зеландия"},
            {contriename: "Норвегия"},
            {contriename: "ОАЭ"},
            {contriename: "Оман"},
            {contriename: "Остров Святой Елены"},
            {contriename: "Пакистан"},
            {contriename: "Палау"},
            {contriename: "Панама"},
            {contriename: "Папуа - Новая Гвинея"},
            {contriename: "Парагвай"},
            {contriename: "Перу"},
            {contriename: "Польша"},
            {contriename: "Португалия"},
            {contriename: "Пуэрто-Рико"},
            {contriename: "Реюньон"},
            {contriename: "Россия"},
            {contriename: "Руанда"},
            {contriename: "Румыния"},
            {contriename: "Сальвадор"},
            {contriename: "Самоа"},
            {contriename: "Сан-Марино"},
            {contriename: "Сан-Томе и Принсипи"},
            {contriename: "Саудовская Аравия"},
            {contriename: "Свазиленд"},
            {contriename: "Северная Корея"},
            {contriename: "Северная Македония"},
            {contriename: "Сейшелы"},
            {contriename: "Сенегал"},
            {contriename: "Сен-Мартен"},
            {contriename: "Сент-Винсент и Гренадины"},
            {contriename: "Сент-Китс и Невис"},
            {contriename: "Сент-Люсия"},
            {contriename: "Сербия"},
            {contriename: "Сингапур"},
            {contriename: "Сирия"},
            {contriename: "Словакия"},
            {contriename: "Словения"},
            {contriename: "Соломоновы Острова"},
            {contriename: "Сомали"},
            {contriename: "Судан"},
            {contriename: "Суринам"},
            {contriename: "США"},
            {contriename: "Сьерра-Леоне"},
            {contriename: "Таджикистан"},
            {contriename: "Тайвань"},
            {contriename: "Тайланд"},
            {contriename: "Танзания"},
            {contriename: "Того"},
            {contriename: "Тонга"},
            {contriename: "Тринидад и Тобаго"},
            {contriename: "Тувалу"},
            {contriename: "Тунис"},
            {contriename: "Туркменистан"},
            {contriename: "Турция"},
            {contriename: "Уганда"},
            {contriename: "Узбекистан"},
            {contriename: "Украина"},
            {contriename: "Уоллис и Футуна"},
            {contriename: "Уругвай"},
            {contriename: "Фиджи"},
            {contriename: "Филиппины"},
            {contriename: "Финляндия"},
            {contriename: "Франция"},
            {contriename: "Хорватия"},
            {contriename: "Центрально-африканская республика"},
            {contriename: "Чад"},
            {contriename: "Черногория"},
            {contriename: "Чехия"},
            {contriename: "Чили"},
            {contriename: "Швейцария"},
            {contriename: "Швеция"},
            {contriename: "Шри-Ланка"},
            {contriename: "Эквадор"},
            {contriename: "Экваториальная Гвинея"},
            {contriename: "Эритрея"},
            {contriename: "Эстония"},
            {contriename: "Эфиопия"},
            {contriename: "ЮАР"},
            {contriename: "Южная Корея"},
            {contriename: "Ямайка"},
            {contriename: "Япония"}
        ]
                
        // Проверка длины имя и фамилия
        
        function change__name() {
            let name = document.getElementById('name');
            console.log(/[0-9]/.test(name.value))
            if(name.value.length < 5 || /[0-9a-zA-Z]/.test(name.value)) {
                name.style.backgroundColor = '#ff8cb2';
                name.removeAttribute("onchange");
                name.setAttribute("oninput","change__name()");
                n=0;
                change__all();
                document.getElementById('name__span').setAttribute('class', 'opacAct err__span');
            }
            else {
                name.style.backgroundColor = '#0F0F41';
                n=15;
                change__all();
                document.getElementById('name__span').setAttribute('class', 'opacNull err__span');
            }
        }
        
        // Проверка email
        
        function validateEmail() 
        {
            let email = document.getElementById('email');
            function test__email (email) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
            }
            if(!test__email(email.value)) 
            {
                email.style.backgroundColor = '#ff8cb2'; 
                email.removeAttribute('onchange');
                email.setAttribute('oninput','validateEmail()');
                e=0;
                change__all();
                document.getElementById('email__span').innerHTML = 'Введите корректный email';
                
            }
            
            else {
                email.style.backgroundColor = '#0F0F41';
                e=14.2;
                change__all();
                document.getElementById('email__span').innerHTML = '';
            }
        }
        
        // Проверка выборки Типа
        
        function change__radio () {
               type = true;         
        }

        



        
        // Проверка длины login
        

        function change__login() {
            let login = document.getElementById('login');   
            if(login.value.length < 3 || /[0-9а-яА-Я]/.test(login.value)) {
                login.style.backgroundColor = '#ff8cb2';
                login.removeAttribute("onchange");
                login.setAttribute("oninput","change__login()");
                l=0;
                change__all();
                document.getElementById('login__span').setAttribute('class', 'opacAct err__span');
            }
            else {
                login.style.backgroundColor = '#0F0F41';
                l=14.2;
                change__all();
                document.getElementById('login__span').setAttribute('class', 'opacNull err__span');
            }
        }
        
        // Проверка длины пароля
        
        function checkPassword() {
            let pass = document.getElementById('password');
            if(pass.value.length<8) {
                pass.style.backgroundColor = '#ff8cb2';
                pass.removeAttribute("onchange");
                pass.setAttribute("oninput","checkPassword()");
                p=0;
                change__all();
                document.getElementById('pass__span').setAttribute('class', 'opacAct err__span');
            }
            else {
                pass.style.backgroundColor = '#0F0F41';
                p=14.2;
                change__all();
                document.getElementById('pass__span').setAttribute('class', 'opacNull err__span');
            }
        }
        
        // Генерация пароля
        
        function gen_password(len)
        {
            var password = "";
            var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < len; i++)
            {
                password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
            }
            return password;
        }
        
        function view_gen_password() {
            let pass = gen_password(12);
            document.getElementById("password").value = pass;
            
            let passw = document.getElementById('password');
            passw.style.backgroundColor = '#0F0F41';
                p=14.2;
                change__all();
                document.getElementById('pass__span').innerHTML = '';
        }
        
        // Показ пароля
        
        function change_to_pass() {
            let input = document.getElementById('password');
            let view = document.getElementById('icon');
            if(input.getAttribute('type') == 'password') {
                input.setAttribute("type","text");
                view.setAttribute("class", "fa fa-eye icon");
            }
            else {
                input.setAttribute("type","password");
                view.setAttribute("class", "fa fa-eye-slash icon");
            }
        }
        
        // Показ подтверждения пароля
        
        function change_to_repass() {
            let input = document.getElementById('repassword');
            let view = document.getElementById('icont');
            if(input.getAttribute('type') == 'password') {
                input.setAttribute("type","text");
                view.setAttribute("class", "fa fa-eye icon");
            }
            else {
                input.setAttribute("type","password"); view.setAttribute("class", "fa fa-eye-slash icon");
            }
        }
        
        // Правильность подтверждения пароля
        
        function checkPasswordMatch () {
            var password = document.getElementById('password');
            var repassword = document.getElementById('repassword');
            if( password.value != repassword.value || repassword.value === '') {
                repassword.style.backgroundColor = "#ff8cb2";
                repassword.removeAttribute("onchange");
                repassword.setAttribute("oninput","checkPasswordMatch()");
                r=0;
                change__all();
                document.getElementById('btn').setAttribute('disabled','');
                document.getElementById('span__repassword').setAttribute('class', 'opacAct err__span');
            }
            else {
                repassword.style.backgroundColor = "#0F0F41";
                r=14.2;
                change__all();
                document.getElementById('btn').removeAttribute('disabled');
                document.getElementById('span__repassword').setAttribute('class', 'opacNull err__span');
            }
        }
                
        
                
        let z=0;
        let i=0;
        function change_radio_to_zak() {
            z=14.2; i=0;
            document.getElementById('typ__span').setAttribute('class', 'err__span opacNull');
            change__all();
        }
        
        function change_radio_to_isp() {
            i=14.2; z=0;
            document.getElementById('typ__span').setAttribute('class', 'err__span opacNull');
            change__all();
        }
        
        // Процентное заполнение кнопки "Зарегистрироваться"
        
        function change__all()
         {
            let pass = document.getElementById("password").value;
            pass?p=14.2:p=0;
             
             
             k = n+e+z+i+l+p+r+c;
            animateBtn(Math.round(k*10)/10);
               
             if(k==100) {
                 
                 btn.setAttribute('type','submit');
                 
                 div_btn.setAttribute('class','btn filled');
                 btn.setAttribute('class','btn__submit');
             }
             
        }
            
        // Ограничение кнопки Зарегистрироваться
        
        function btn_check () {
            let div_btn = document.getElementById('div_btn');
             let btn = document.getElementById('btn');
             if(k==100) {
                 
                 btn.setAttribute('type','submit');
                 
                 div_btn.setAttribute('class','btn');
                 btn.setAttribute('class','btn__submit');
             }
             else {
                 change__name();
                 validateEmail();
                 change__login();
                 checkPassword();
                 checkPasswordMatch ();
                 if(!type) {
                     document.getElementById('typ__span').setAttribute('class', 'err__span opacAct');
                     
                 }
                div_btn.setAttribute('class', 'btn btn-disabled');
                btn.setAttribute('class','btn__submit disabled');
             }
        }
        
        
    // Анимация для заполнения
        let end=0; 
        
        function animateBtn(n) {
            const g = setInterval(
                function()
                    {
                        
                        if(end<n){
                            end+=0.1;
                            let btn_div = document.getElementById("btn__div");
                            btn_div.style.width = Math.round(end*10)/10+"%";

                            if((Math.round(end*10)/10)===n) 
                            {
                                clearInterval(g);
                            }
                            console.log('asd')
                        }
                        else if(end>n) {
                            console.log('fsdsf')
                             end-=0.1;
                            let btn_div = document.getElementById("btn__div");
                            btn_div.style.width = Math.round(end*10)/10+"%";

                            if((Math.round(end*10)/10)===n) 
                            {
                                clearInterval(g);
                            }
                        }
                        else {
                           clearInterval(g);
                        }
                     }
                ,5);
        }
    

    // ===================++++++++++++++++++++++++

    const showList = (iteam) => {
        const list = document.querySelectorAll(iteam);

        for(let i = 0; i < list.length; i++){
            list[i].addEventListener('click', () => {
                activeList(i)
            })
        }
        console.log(contries)

        function activeList(index) {
            if(list[index].classList.contains('active__list') === true){
                console.log('sfsdsd')
                list[index].classList.remove('active__list');
                list[index].nextElementSibling.classList.remove('active__sublist');

                setTimeout(() => {
                    list[index].nextElementSibling.style.display = 'none'
                }, 300)
            }else{
                console.log('dgfhg')
                for(let i = 0; i < list.length; i++){
                    list[i].classList.remove('active__list');
                    list[i].nextElementSibling.classList.remove('active__sublist');
                }
                list[index].classList.add('active__list');
                list[index].nextElementSibling.style.display = "block";

                setTimeout(() => {
                    list[index].nextElementSibling.classList.add('active__sublist')
                }, 10)

            }
        }

        function addCountries (iteam) {
            const listBlock = document.querySelector(iteam)
            for(let i = 0; i < contries.length; i++){
                let div = document.createElement('div');
                div.classList.add('country__list_iteam');
                div.textContent = contries[i].contriename;
                listBlock.append(div)
                div.addEventListener('click', () => {
                  changeCountry(contries[i].cites, div)
                })
            }
        }
        function changeCountry(arr,iteam) {
            iteam.parentElement.previousElementSibling.querySelector('span').textContent = iteam.textContent;
            activeList(0);
            c = 14,2;
            change__all();
            document.querySelector('.country__form_block .err__span').setAttribute('class', 'err__span opacNull');
        }
        addCountries('.country__form_list')
    }

    showList('.contry__form_btn')