class Ferramenta{
    constructor(nome='??',material='??',attack_damage='??',durabilidade='??'){
        this.nome = nome
        this.material = material
        this.attack_damage = attack_damage
        this.durabilidade = durabilidade
    }
    atacar(){
        if (this.durabilidade > 0) {
            console.log(`A criatura toma ${this.attack_damage} de dano.`)
            this.durabilidade--
        } else {
            console.log('A durabilidade da ferramenta chegou a 0, essa ferramenta quebrou.')
        }
    }
}

class Ferramenta_encantada extends Ferramenta {
    constructor(nome='??',material='??',attack_damage='??',durabilidade='??',encantamento='??'){
        super(nome,material,attack_damage,durabilidade)
        this.encantamento = encantamento
    }
    desencantar(){
        this.encantamento = 'Desencantado'
    }
}

const input_nome = document.querySelector('#nome')
const input_material = document.querySelector('#material')
const input_attack = document.querySelector('#attack_damage')
const input_durabilidade = document.querySelector('#durabilidade')
const radio_sim = document.querySelector('#sim_encantada')
const radio_nao = document.querySelector('#nao_encantada')
const input_encantamento = document.querySelector('#encantamento')
const btn_enviar = document.querySelector('#enviar')
const div_ferramentas = document.querySelector('#ferramentas')
let lista_ferramentas = []
let cont = 0

const criar_espaco=()=>{
    let f = 'f'
    f += cont
    return f
}

const limpar=()=>{
    input_nome.value = ''
    input_material.value = ''
    input_attack.value = ''
    input_durabilidade.value = ''
    input_encantamento.value = ''
    input_nome.focus()
    radio_nao.checked = true
}

const criar_mostrar_p=()=>{
    div_ferramentas.innerHTML = ''
    lista_ferramentas.map((ferramenta)=>{
        let p = document.createElement('p')
        p.classList.add('ferramenta')
        p.innerHTML = `Nome: ${ferramenta.nome}, Material: ${ferramenta.material}, Attack Damage: ${ferramenta.attack_damage}, Durabilidade: ${ferramenta.durabilidade}, Encantamento: ${ferramenta.encantamento}`
        div_ferramentas.appendChild(p)
    })
}

btn_enviar.addEventListener('click', ()=>{
  const nome = input_nome.value
  const material = input_material.value
  let attack = input_attack.value
  let durabilidade = input_durabilidade.value
  if (nome.length > 0 && material.length > 0 && attack.length > 0 && durabilidade.length > 0) {
    if (attack < 0) {
        window.alert('Valor de attack damage negativo, considerado o mesmo valor porem positivo.')
        attack *= -1
    }
    if (durabilidade < 0) {
        window.alert('Valor de durabilidade negativo, considerado o mesmo valor porem positivo.')
        durabilidade *= -1
    }
    if (radio_sim.checked) {
        const encantamento = input_encantamento.value
        if (encantamento.length > 0) {
            lista_ferramentas.push(criar_espaco())
            lista_ferramentas[cont] =new Ferramenta_encantada(nome, material, attack, durabilidade, encantamento)
            cont++   
            criar_mostrar_p()
            limpar()
        } else {
            window.alert('Faltam ados para o cadastro da ferramenta.')
        }
    } else {
        lista_ferramentas.push(criar_espaco())
        lista_ferramentas[cont] =new Ferramenta(nome, material, attack, durabilidade)
        cont++   
        criar_mostrar_p()
        limpar()
    }
  } else {
    window.alert('Faltam dados para o cadastro da ferramenta.')
  }
})