const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}