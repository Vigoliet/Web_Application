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

            //DATA
            
            //const headline = data['headline']; //data from json
            //const intro = data['intro'];       //data from json
            //can also call the attribute data directly by doing 
            //p1.textContent = data.intro instead of setting a const up for data.


            //Elements
            const img = document.createElement('img');
            const p1 = document.createElement('p');
            const h1 = document.createElement('h1');
            const button = document.createElement('button');

            //Only works after creating the element
            //img.src = data['articleimage']; didn't work and gave undefined
            img.setAttribute('src', data.articleImage);
            
            //can also call the attribute data directly by doing 
            //p1.textContent = data.intro instead of seting a const up at data.
            p1.textContent = data.intro; 
            h1.textContent = data.headline;
            button.textContent = "hide";

            //can also use: button.addEventListener('click', Button1Handler);
            button.onclick = Button1Handler; //Button for hiding image.
            function Button1Handler() {
                var x = document.getElementById("Exercise2");
                if (x.style.display === "none") {
                  x.style.display = "block";
                  button.textContent = "hide";
                } else {
                  x.style.display = "none";
                  button.textContent = "unhide";
                }
              }
              

            document.getElementById('Exercise3').appendChild(button);      
            document.getElementById('Exercise1').appendChild(h1);
            document.getElementById('Exercise1').appendChild(p1);  
            document.getElementById('Exercise2').appendChild(img);
            
   
        };



