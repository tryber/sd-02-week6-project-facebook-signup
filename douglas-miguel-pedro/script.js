let picker = new Pikaday({
    field: document.getElementById('datepicker'),
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    firstDay: 1,
    maxDate: new Date(2022, 12, 31),
    yearRange: [2000, 2020]
});

let botaoAzul = document.getElementsByClassName('azul')[0];
botaoAzul.addEventListener('click', function () {
    alert('ola')
})
