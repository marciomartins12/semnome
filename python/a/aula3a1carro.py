from a.aula3a1 import Veiculo
class Carro(Veiculo):
    def __init__(this, marca, modelo):
        super().__init__(marca, modelo)

    def __str__(this):
        return super().__str__()
    
fusca = Carro("fusca", "123")
print(fusca)
fusca.exibemodelo()