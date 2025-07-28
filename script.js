<script>
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 200); // animation en cascade
    });
  });
</script>