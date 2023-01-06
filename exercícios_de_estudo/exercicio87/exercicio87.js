/*const tester = () => {
    try {
        theCode
    } catch (err) {
        console.error('Erro no código da aplicação:\n' + err)
    } finally {
        console.info('Código finalizado.')
    }
}

tester()*/

const getAvatar = githubUser => fetch('https://api.github.com/users/' + githubUser) 
    .then(res => res.status=='200'?res.json():'404')
    .then(res => { return res!='404'?{user: res.login, avatar: res.avatar_url}:res })
    .catch(err => 'Erro ao tentar se conectar com a api do github:\n' + err)

const getGithubUserAvatar = githubUser => {
    try {
        if (githubUser .length < 1) throw 'Digite o nome de algum usuário.'
        const user = getAvatar(githubUser)
    } catch (err) {
        console.log(err)   
    }
}

getGithubUserAvatar('MakiODJeri')