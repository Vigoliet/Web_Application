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

            //Data
            const headline = data['headline']; //data from json
            const intro = data['intro'];       //data from json
            
            //Elements
            const img = document.createElement('img');
            const p1 = document.createElement('p');
            const h1 = document.createElement('h1');
            const button = document.createElement('button');

            //Only works after creating the element
            img.src = data['articleimage']; 
            
            p1.textContent = intro;
            h1.textContent = headline;
            button.textContent = "hide";

            function myFunction() {
                var x = document.getElementById("Exercise2");
                if (x.style.display === "none") {
                  x.style.display = "block";
                  button.textContent = "hide";
                } else {
                  x.style.display = "none";
                  button.textContent = "unhide";
                }
              }
              button.onclick = myFunction;

            document.getElementById('Exercise3').appendChild(button);      
            document.getElementById('Exercise1').appendChild(h1);
            document.getElementById('Exercise1').appendChild(p1);  
            document.getElementById('Exercise2').appendChild(img);
            
   
        };



