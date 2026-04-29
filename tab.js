function opentab(tabname) {
            document.querySelectorAll('.tab-links').forEach(tab => tab.classList.remove('active-link'));
            document.querySelectorAll('.tab-contents').forEach(content => content.classList.remove('active-tab'));
            document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`).classList.add('active-link');
            document.getElementById(tabname).classList.add('active-tab');
        }
        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({behavior: 'smooth'});
            });
        });