// Общие настройки для всех каруселей
const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((slider, index) => {
    new Swiper(slider, {
        direction: 'vertical', // Вертикальная прокрутка
        loop: true, // Бесконечная прокрутка
        speed: 15000, // Скорость прокрутки (плавная анимация)
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 0, // Без паузы между прокрутками
            disableOnInteraction: false, // Не останавливать прокрутку при взаимодействии
        },
        slidesPerView: 2, // Показываем по 3 картинки
        allowTouchMove: false, // Отключаем ручное управление
    });

    // Чередуем направление анимации
    if (slider.classList.contains('reverse')) {
        slider.swiper.params.autoplay.reverseDirection = true;
    }
});

// Функция для определения операционной системы
function getOS() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }

    // Android detection
    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    // Detect MacOS
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        return 'MacOS';
    }

    // Detect Windows
    if (/Win32|Win64|Windows|WinCE/.test(userAgent)) {
        return 'Windows';
    }

    // Detect Linux
    if (/Linux/.test(userAgent)) {
        return 'Linux';
    }

    return 'other';
}

// Логика отображения кнопок
function displayButtons() {
    const os = getOS();
    const btnChat = document.querySelector('.btn-chat');
    const btnAppStore = document.querySelector('.btn-app-store');
    const btnGooglePlay = document.querySelector('.btn-google-play');

    // Показываем чат на всех устройствах
    btnChat.style.display = 'flex';

    // Логика для iOS
    if (os === 'iOS') {
        btnAppStore.style.display = 'flex';
    }

    // Логика для Android
    if (os === 'Android') {
        btnGooglePlay.style.display = 'flex';
    }

    // Логика для MacOS/Windows/Linux и прочих
    if (os === 'MacOS' || os === 'Windows' || os === 'Linux' || os === 'other') {
        // Только web-чат доступен, так что скрываем кнопки App Store и Google Play
        btnAppStore.style.display = 'none';
        btnGooglePlay.style.display = 'none';
    }
}

// Вызов функции при загрузке страницы
displayButtons();