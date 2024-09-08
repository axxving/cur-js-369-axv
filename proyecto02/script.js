const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

const activarLinks = (event) => {
    list.forEach((item) => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
};

list.forEach((item) =>
    item.addEventListener('click', activarLinks)
)