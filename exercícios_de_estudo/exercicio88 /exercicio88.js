const userAvatarDiv = document.querySelector('#userAvatarDiv')
const userNameA = document.querySelector('#userNameA')
const getUser = document.querySelector('#getUser')
const submit = document.querySelector('#submit')
const user = ({div,a}) => ({
    div,
    a,
    updateDiv: function({avatar}) {
        div.setAttribute('style',`Background-image: url(${avatar});`)
    },
    updateP: function({name}) {
        a.innerHTML = name
        a.setAttribute('href', 'https://github.com/' + name)
    }
 })
const userReference = user({div: userAvatarDiv,a: userNameA})
submit.addEventListener('click', evt => {
    evt.preventDefault()
    try {
        const username = getUser.value
        if (username.length < 1) throw 'Please enter a valid Github username into the input box bellow.'
        const user = fetch('https://api.github.com/users/' + username)
        .then(response => response.json())
        .then(response => ({avatar: response.avatar_url,name: response.login}))
        .catch(error => alert('Error:\n' + error))
        user.then(res => {
            try {
                if (res.avatar == undefined && res.name == undefined) throw 'This user does not exist on the Github social network.'
                userReference.updateDiv(res)
                userReference.updateP(res)
            } catch (error) {
                alert('Error:\n' + error)
            }
        })
    } catch (error) {
        alert('Error:\n' + error)
    }
})