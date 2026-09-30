// Navegación entre secciones (Tabs)
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const menuItems = document.querySelectorAll('.menu-item');

    tabs.forEach(tab => tab.classList.remove('active'));
    menuItems.forEach(item => item.classList.remove('active'));

    const activeTab = document.getElementById(`tab-${tabId}`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    const activeMenuItem = document.querySelector(`.menu-item[data-tab="${tabId}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
}

// Inicialización de Event Listeners al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    
    // Menú Lateral
    document.querySelectorAll('.menu-item').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            switchTab(tab);
        });
    });

    // Copiar IP
    const copyIpBtn = document.getElementById('copy-ip');
    if (copyIpBtn) {
        copyIpBtn.addEventListener('click', () => {
            const ipText = "mc.maranlife.com";
            navigator.clipboard.writeText(ipText).then(() => {
                alert("¡IP copiada al portapapeles: " + ipText + "!");
            }).catch(err => {
                console.error("Error al copiar IP: ", err);
            });
        });
    }

    // Modal de Información
    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // Escucha clics en botones de info (.info-btn)
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.info-btn');
        if (!btn) return;

        e.preventDefault();
        const card = btn.closest('.product-card');
        
        const titulo = card ? card.querySelector('h3').innerText : 'Información';
        const textoInfo = btn.getAttribute('data-info') || (card && card.querySelector('.description') ? card.querySelector('.description').innerText : 'Sin información disponible.');

        if (modalTitle) modalTitle.innerText = titulo;
        if (modalText) modalText.innerHTML = textoInfo;
        if (modal) modal.classList.add('active');
    });

    // Cerrar modal haciendo clic afuera
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }
});

function cerrarModal() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}