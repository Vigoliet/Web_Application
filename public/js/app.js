console.log('I am also alive.');
console.log('hey hey from client');

        let dataURL = '../data/exercise1.json';
        let req = new XMLHttpRequest();
        req.open('GET', dataURL); //preppa för att gå och  hämta data
        req.responseType='json'; //preppa för att ta emot json
        req.send(); //go fetch!

        console.log('data received');

        //preppa vad som ska hända, när hämtningen är klar
        //dvs när all data har hämtats, då triggas onload eventet
        //och här skriver vi vad som ska ske då
        req.onload = () => {
            const data = req.response;
            console.log(data);

            const headline = data['headline'];
            const intro = data['intro'];

            const p1 = document.createElement('p');
            const h1 = document.createElement('h1');
            
            p1.textContent = intro;
            h1.textContent = headline;

            document.getElementById('Exercise1').appendChild(h1);
            document.getElementById('Exercise1').appendChild(p1);  
        };


