
// Função para mostrar ou ocultar o botão "Voltar ao Topo" conforme a rolagem
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btnScrollToTop = document.getElementById("btnScrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  }
  
  // Função para rolar suavemente de volta ao topo quando o botão é clicado
  function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para IE, Firefox, Chrome, Opera, Safari
}
