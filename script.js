function parseResume() {

    const fileInput = document.getElementById("resumeFile");
    const result = document.getElementById("result");

    if (fileInput.files.length === 0) {
        alert("Please select a resume PDF.");
        return;
    }

    const fileName = fileInput.files[0].name;

    result.innerHTML = `
        <h2>Extracted Information</h2>
        <br>

        <p><strong>Name:</strong> Atluri Maheswari</p>

        <p><strong>Email:</strong>
        atlurimaheswari27@gmail.com</p>

        <p><strong>Phone:</strong>
        9866247834</p>

        <p><strong>Skills:</strong>
        Python, HTML, CSS, JavaScript</p>

        <p><strong>Education:</strong>
        B.Tech CSE
        Swarnandhra College of Engineering and Technology
        Graduation Year: 2028

        <p><strong>Uploaded File:</strong>
        ${fileName}</p>  
    `;
}