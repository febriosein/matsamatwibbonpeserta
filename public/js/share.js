let shareData = {
        title: 'MATSAMA MAN KAUR 2025',
        text: 'Join the Matsama',
        url: 'https://osmanka.site/twibbon-matsama-peserta',
      }

      const btn = document.querySelector('em');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: Share canceled!'
          )
      });
