(function () {
    var image = document.querySelector('#image');
    var title = document.querySelector('#title');
    var choices = document.querySelector('#choices');
    var braveryResult = document.querySelector('#bravery-result');
    var fearResult = document.querySelector('#fear-result');
    var guiltResult = document.querySelector('#guilt-result');
    var bloodProps = {
        bravery: 0,
        fear: 0,
        guilt: 0
    };
    var blood = 0;
    (function show(step) {
        for (var bloodProp in bloodProps) {
            if (step[bloodProp]) {
                bloodProps[bloodProp] += step[bloodProp];
                blood += step[bloodProp];
            }
        }
        document.documentElement.style.backgroundColor = 'rgba(255, 0, 0, ' + blood / 20 + ')';
        braveryResult.textContent = 'Bravery: ' + bloodProps.bravery;
        fearResult.textContent = 'Fear: ' + bloodProps.fear;
        guiltResult.textContent = 'Guilt: ' + bloodProps.guilt;
        if (step.jump) {
            step = story[step.jump];
        }
        if (step.image) {
            image.src = 'images/' + step.image + '.png';
            image.style.display = 'inline';
        } else {
            image.style.display = 'none';
        }
        title.textContent = step.title;
        if (!step.choices) {
            step.choices = {
                'Restart': {
                    jump: 0
                }
            };
        }
        Object.getOwnPropertyNames(step.choices).forEach(function (choice) {
            var choiceElem = document.createElement('div');
            choiceElem.classList.add('choice');
            choiceElem.textContent = choice;
            choiceElem.addEventListener('click', function () {
                while (choices.hasChildNodes()) {
                    choices.removeChild(choices.lastChild);
                }
                if (step.choices[choice].jump === 0) {
                    location.reload();
                }
                scrollTo(0, 0);
                show(step.choices[choice]);
            });
            choices.appendChild(choiceElem);
        });
        for (var i = choices.children.length; i >= 0; i--) {
            choices.appendChild(choices.children[Math.random() * i | 0]);
        }
    })(story[0]);
})();
