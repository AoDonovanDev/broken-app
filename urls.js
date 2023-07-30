const fs = require('fs')


let [npath, fpath, input] = process.argv

fs.access(input, fs.constants.F_OK, (err) => {
    if (!err) {
        read(input)
    }
    else{
        console.log('cant find that file!', err.code)
        process.exit(1)
    }
  });



function read(path){ 
    fs.readFile(path, 'utf8', fileOpener)
}

function fileOpener(err, data){
    if(err){
        console.log('cant read this file sorry', err)
        process.exit(1)
    }
    let urls = data.split(/[ \r\n]+/);
    urls = urls.filter(c => c !== "");
    for(let url of urls){
        urlHandler(url)
    }
    return urls
}

async function urlHandler(url){
    try{
        const response = await fetch(url)
        const text = await response.text()
        write(url, text)
    }
    catch(e){
        console.log('couldnt connect with this url', url)
    }
    
}

function write(url, text){
    console.log(url)
    let path = new URL(url)
    path = path.hostname.replace('www', '')
    fs.writeFile(`${path}.txt`, text, 'utf8', fileWriter)
}

function fileWriter(err){
    if(err){
        console.log('oh no', err)
    }
    console.log('success')
}