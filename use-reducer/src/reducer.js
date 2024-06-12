export const ADICIONAR_FRASE = "ADICIONAR_FRASE"
export const EXCLUIR_FRASE = "EXCLUIR_FRASE"

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONAR_FRASE:
            if (acao.frase.length < 20) {
                alert('Ops...não são permitidas frases com menos de 20 caracteres')
                return estado
            }
            if (estado.includes(acao.frase)) {
                alert("Não sçao permitidas frases duplicadas")
                return estado
            }
            return [...estado,acao.frase]
        
        case EXCLUIR_FRASE:
            return estado.filter(frase => frase !== acao.frase)

        default:
            return estado;
    
    }
}

export default reducer