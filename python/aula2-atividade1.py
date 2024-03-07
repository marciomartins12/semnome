class Carro:
    modelo = ''
    ano = ''
    cor = ''
    def __init__(this, modelo, ano, cor):
        this.modelo = modelo
        this.cor = cor
        this.ano = ano

    def getinf(this):
        return print(f"modelo : {this.modelo}\n ano : {this.ano}\n cor : {this.cor}")
    
teste = Carro("fusca", "2002", "verde")

teste.getinf()
