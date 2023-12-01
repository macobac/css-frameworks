export default function formatDate(apiDate) {
    const date = new Date(apiDate);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
};
