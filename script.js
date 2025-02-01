document.getElementById("generate-link").addEventListener("click", function() {
    // Collecting user input
    const resumeData = {
        name: document.getElementById("name").value,
        title: document.getElementById("title").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
        about: document.getElementById("about").value,
        experience: document.getElementById("experience").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value
    };

    // Converting object to base64
    const encodedData = btoa(JSON.stringify(resumeData));
    const shareableLink = `${window.location.origin}/view.html?data=${encodedData}`;

    // Displaying the shareable link
    document.getElementById("resume-link-container").innerHTML = `
        <p>Your Shareable Resume Link:</p>
        <a href="${shareableLink}" target="_blank">${shareableLink}</a>
    `;
});

// If viewing resume, populate data
if (window.location.pathname.includes("view.html")) {
    const params = new URLSearchParams(window.location.search);
    const data = params.get("data");

    if (data) {
        const decodedData = JSON.parse(atob(data));

        document.getElementById("name").innerText = decodedData.name;
        document.getElementById("title").innerText = decodedData.title;
        document.getElementById("email").innerText = decodedData.email;
        document.getElementById("phone").innerText = decodedData.phone;
        document.getElementById("website").innerText = decodedData.website;
        document.getElementById("about").innerText = decodedData.about;
        document.getElementById("experience").innerText = decodedData.experience;
        document.getElementById("education").innerText = decodedData.education;
        document.getElementById("skills").innerText = decodedData.skills;
    }
}
