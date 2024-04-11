const down_left_intro = document.querySelector(".down_left_intro");
const down_right_intro = document.querySelector('.down_right_intro');

function handlemouseEnter() {
    down_left_intro.innerHTML = '<br><br> MBTI는 ISFP'
}

function handleClick() {
    down_right_intro.style.color = '#12372A';
    down_right_intro.style.fontWeight = 'bold';
}

down_left_intro.addEventListener("mouseenter",handlemouseEnter);

down_right_intro.addEventListener("click", handleClick);
