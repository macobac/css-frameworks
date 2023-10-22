export default async function getWithToken(url) {
    try {
        console.log(url)
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}