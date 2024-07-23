export default function formatNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        const number = parseInt(numbers, 10);
        const formattedNumber = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(number).replace(/\s/g, ' ');
        return formattedNumber;
    }

    if (numbers.length === 0) {
        return "";
    }

    return numbers.map(number => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(number)).join(', ');
}
