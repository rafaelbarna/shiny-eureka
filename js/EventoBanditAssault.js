class EventoBanditAssault {
    constructor() {
        this.contadorCliques = 0;
        this.usuariosClicaram = new Set();
        this.numeroMinimoCliques = 3; // Altere para 3 para definir o mínimo de 3 cliques
    }

    registrarClique() {
        // Simule um ID de usuário (substitua isso com uma lógica real)
        const currentUserId = "user123";

        // Verifique se o usuário atual já clicou
        if (!this.usuariosClicaram.has(currentUserId)) {
            this.usuariosClicaram.add(currentUserId);
            this.contadorCliques++;

            // Atualize o elemento HTML para exibir o contador de cliques
            document.getElementById("contadorCliques").textContent = `Cliques Registrados: ${this.contadorCliques}`;
            
            // Verifique se o número mínimo foi alcançado
            if (this.contadorCliques >= this.numeroMinimoCliques) {
                // Chame a função para enviar a notificação
                this.enviarNotificacao();
            }
        }
    }

    enviarNotificacao() {
        // Verifique se o navegador suporta notificações
        if ("Notification" in window) {
            // Solicitar permissão para mostrar notificações
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    // Criar e exibir a notificação
                    var notification = new Notification("Evento Bandit Assault", {
                        body: "O número mínimo de cliques foi alcançado!",
                    });
                }
            });
        }
    }
}

// Inicialize a classe e registre o evento de clique
const evento = new EventoBanditAssault();
document.getElementById("registraClique").addEventListener("click", () => {
    evento.registrarClique();
});