const textarea = document.querySelector("textarea");
const iframe = document.querySelector("iframe");
textarea.addEventListener("input", (event) => {
    iframe.srcdoc = textarea.value;
    console.log(textarea.value);
});
