 document.querySelectorAll('.faq-item').forEach(item => {
    item.onclick = () => {
      item.querySelector('.faq-answer').classList.toggle('show');
      item.querySelector('.faq-answer').style.display =
        item.querySelector('.faq-answer').style.display === 'block' ? 'none' : 'block';
    };
  });