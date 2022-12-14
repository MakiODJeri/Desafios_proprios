const Agente={
    Nome:'Robert',
    Classe:'Ocultista',
    Trilha:'Lâmina Paranormal',
    equipamentos:{
        equip1:'Faca',
        equip2:'Lanterna',
        equip3:'Componentes ritualisticos',
        equip4:'Kit médico',
        equip5:'Kit hacker',
    },
    rituais:{
        ritu1:'Cicatrização',
        ritu2:'Amaldiçoar arma',
        ritu3:'Tela de ruido',
        ritu4:'Confusão mental',
        ritu5:'Eletrificação'
    }
}
const agente_string_json =JSON.stringify(Agente) //Objeto para string json
const agente_object_json =JSON.parse(agente_string_json) //String json para objeto
console.log(Agente)
console.log('===========================================')
console.log(agente_string_json)
console.log('===========================================')
console.log(agente_object_json)