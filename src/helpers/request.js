
export default async function request(url, method = "POST", values = null, includeCookie = false) {
    let myHeaders = new Headers();
    if (method === "PATCH") {
        myHeaders.append("Content-Type", "application/merge-patch+json");
    } else {
        myHeaders.append("Content-type", "application/json");
    }

    let requestOptions = {
        method: method,
        headers: myHeaders,
    }
    if (values) {
        const raw = JSON.stringify(values);
        requestOptions.body = raw;
    }

    let status, json;
    json = await fetch(url, requestOptions)
        .then(response => {
            status = response.status;
            return response.text();
        })
        .then(result => {
            if (result) return JSON.parse(result);
            return;
        })
        .catch(result => console.error(result));

    return { status, json };
}
