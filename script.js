document.addEventListener('DOMContentLoaded', () => {
    // Pobierz wszystkie elementy menu
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        // Nasłuchuj kliknięcia na każdym elemencie menu
        item.addEventListener('click', () => {
            // Znajdź sekcję szczegółów wewnątrz klikniętego elementu
            const details = item.querySelector('.item-details');

            // Przełącz klasę 'hidden' (ukryty)
            // Jeśli element był ukryty, teraz będzie widoczny. I na odwrót.
            details.classList.toggle('hidden');

            // Opcjonalnie: Możesz dodać klasę do 'menu-item', aby zmienić jego styl po rozwinięciu,
            // np. by podkreślić, że jest aktywny
            // item.classList.toggle('active');
        });
    });
});