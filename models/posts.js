module.exports = {
    posts: [
        {
            id: "dfjksdf",
            title: "Teste de títiulo",
            descrption: "Teste de descrição"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title: title, description: description });
    },

}

//Gerar id
function generateID() {
    return Math.random().toString(36).substr(2, 9);
}

