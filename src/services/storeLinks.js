// Buscando os links e salvado
export async function getLinksSave(key) {

    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvado um link no localStorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    //Se já tiver um link salvo com alguma id eu n vou deixar duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink) {
        console.log('Esse link já existe na sua lista')
        return;
    }
    // adicionado esse novo link na lista..
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo');
}

// deletar algum link
export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('deu certo')
    return myLinks;
}


