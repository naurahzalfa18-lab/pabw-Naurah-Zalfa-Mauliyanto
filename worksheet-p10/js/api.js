
const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function muat() {
    const respons = await fetch(ALAMAT);
    console.log("Content-Type:", respons.headers.get("content-type"));

    console.log("status", respons.status, "ok", respons.ok);

    if (!respons.ok) {
        throw new Error("status " + respons.status);
    }

    return respons.json();
}
