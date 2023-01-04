class iniciativa {
    constructor (name,...value) {
        console.log(value)
        this.name = name
        this.value = value.sort((va,vb)=>vb-va)[0]
    }
    static ordenar (...players) {
        return players.sort((pa,pb)=> pb.value - pa.value)
    }
}
const gerRanNumber = () => Math.floor(Math.random() * (21 - 1) + 1)
const Rubens =new iniciativa('Rubens',gerRanNumber(),gerRanNumber(),gerRanNumber())
const Boris =new iniciativa('Boris',gerRanNumber(),gerRanNumber())
const Dante =new iniciativa('Dante',gerRanNumber())
const Balu =new iniciativa('Balu', gerRanNumber(),gerRanNumber())
const OrdList = iniciativa.ordenar(Rubens,Boris,Dante,Balu)
OrdList.forEach((player) => console.log(player.name))*