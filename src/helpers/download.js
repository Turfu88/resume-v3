

export function downloadDocument(location, name) {
    fetch(location).then(function (t) {
        return t.blob().then((b) => {
            let a = document.createElement("a");
            a.href = URL.createObjectURL(b);
            a.setAttribute("download", name);
            a.click();
        });
    });
}