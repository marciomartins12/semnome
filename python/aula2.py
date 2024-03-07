
class Restaurante:
    
    nome = ''
    categoria = ''
    ativo = False

    def __init__(this, nome, categoria, ativo):
        this.nome = nome
        this.categoria = categoria 
        this.ativo = ativo
    
    def getInf(this):
        return print(f" nome  :  {this.nome},\n categoria  :   {this.categoria}\n Abeto    :   {'não' if this.ativo else 'sim'}")

teste = Restaurante("marcio", "teste", False)


teste.getInf()