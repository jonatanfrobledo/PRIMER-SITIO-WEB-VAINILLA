// Función para guardar la selección del usuario y redirigir a select.html
function selectSocial(name, url) {
    try {
        localStorage.setItem("selectedSocialName", name);
        localStorage.setItem("selectedSocialUrl", url);
        window.location.href = "select.html"; // Redirige a select.html
    } catch (e) {
        console.error('Error al guardar en localStorage', e);
    }
}

// Función para actualizar la página select.html con la información de la red social seleccionada
function updatePage() {
    const ageData = {
        'Instagram': '18-34 años',
        'Facebook': '25-54 años',
        'Snapchat': '13-29 años',
        'Pinterest': '18-49 años',
        'TikTok': '16-24 años',
        'X': '18-34 años',
    };

    try {
        const selectedName = localStorage.getItem("selectedSocialName");
        const selectedUrl = localStorage.getItem("selectedSocialUrl");
        
        if (selectedName && selectedUrl) {
            document.getElementById("selectedSocialName").textContent = `Información de ${selectedName}`;
            document.getElementById("ageRange").textContent = `Rango de edades: ${ageData[selectedName] || 'Información no disponible'}`;
            document.getElementById("siteLink").href = selectedUrl;
            document.getElementById("siteLink").textContent = `Ir al sitio web de ${selectedName}`;
        } else {
            document.getElementById("selectedSocialName").textContent = 'No se ha seleccionado ninguna red social.';
            document.getElementById("ageRange").textContent = '';
            document.getElementById("siteLink").style.display = 'none';
        }
    } catch (e) {
        console.error('Error al acceder a localStorage', e);
    }
}

// Ejecuta updatePage cuando la página se carga
window.onload = updatePage;
