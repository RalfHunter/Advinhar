import { Input, rl } from "./input";


async function main() {
    while(true){
        let resposta:string = await Input("Quer brincar de um jogo de adivinhação?[s/n]")

        if(resposta == "s"){
            console.log("Muito bem! Vamos Começar!!!")
            console.log("Entre 0 e 10 escolha 1 numero!")
            let numero:number = Math.floor(Math.random() * 11)
            let tentativas:number = 1
            while(true){
                let novoNumero:number = await Input("Numero: ")
                if(novoNumero == numero){
                    console.log(`Você acertou! Você precisou de ${tentativas} tentativa(s) para acertar!!!` )
                    tentativas = 0
                    while(true){
                        resposta = await Input("Quer jogar novamente?[s/n]")
                        if(resposta=="s"){
                            console.log("Muito bem! Vamos Começar Novamente!!!")
                            console.log("Entre 0 e 10 escolha 1 numero!")
                            numero = Math.floor(Math.random() * 11)
                            break
                        } else if (resposta=="n"){
                            console.log("Saindo")
                            rl.close()
                            return
                        } else {
                            console.log("Não entendi.")
                            continue
                        }
                    }
                } else {
                    console.log("Tente mais um vez")
                    tentativas += 1
                    continue
                }
            }
        } else if (resposta == "n"){
            console.log("Saindo...")
            rl.close()
            break
        }else {
            console.log("Não entendi, vou perguntar novamente.")
        }
    }
}

main()