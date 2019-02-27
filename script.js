const load = () => {
    axios.get('http://roodkristo.ikt.khk.ee/cockpit/api/collections/get/loomad')
    .then((response) => {
        console.log(response.data.entries);
        
        response.data.entries.forEach((element) => {
            let div = document.createElement('div');
            let t = document.createElement(element.nimi);
            let p = document.createElement('p');
            
            let img = document.createElement('img');
            img.src = element.pilt.path;
            
            div.appendChild(img);
            p.appendChild(t);
            div.appendChild(p);
            document.querySelector('#app').appendChild(div);
        })
    })
    .catch((error) => {
        console.log(error);
    })
};

window.onload = load;