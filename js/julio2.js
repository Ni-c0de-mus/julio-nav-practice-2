//Create function to select elements

alert('jello furld');

const selectElement = (element) => document.querySelector(element);


selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});