document.querySelectorAll('.btn-edit').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let form = e.target.closest('.card').querySelector('.form-group');
        form.classList.toggle('d-none');
        let text = e.target.closest('.card').querySelector('.text-group');
        text.classList.toggle('d-none');
        let card = e.target.closest('.card');
        card.classList.toggle('col-lg-8');
        card.classList.toggle('col-lg-10');
    });
});
document.querySelectorAll('.btn-exitedit').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let form = e.target.closest('.card').querySelector('.form-group');
        form.classList.toggle('d-none');
        let text = e.target.closest('.card').querySelector('.text-group');
        text.classList.toggle('d-none');
        let card = e.target.closest('.card');
        card.classList.toggle('col-lg-10');
        card.classList.toggle('col-lg-8');
    });
});