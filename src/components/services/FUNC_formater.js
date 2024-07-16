export default function formatDate(dateString) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const dateParts = dateString.split('-');
    const year = dateParts[0];
    const month = months[parseInt(dateParts[1], 10) - 1];
    const day = dateParts[2];

    return `${day} ${month} ${year} г.`;
}