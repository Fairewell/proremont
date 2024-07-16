export default function formatNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        console.warn("In input is not numbers...");
        const number = parseInt(numbers, 10);
        console.warn("Now is number! " + number);
        const formattedNumber = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(number).replace(/\s/g, ' ');
        console.log("FORMATTED warns: " + formattedNumber);
        return formattedNumber;
    }

    if (numbers.length === 0) {
        console.warn("Numbers array is empty");
        return "";
    }

    console.log("FORMATTED: " + numbers.map(number => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(number)).join(', '));
    return numbers.map(number => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(number)).join(', ');
}
