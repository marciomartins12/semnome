from typing import Any


class Cardapio:
    cardapio = []

    def __init__(this, nome : str, preco : float) -> None:
        this.nome = nome
        this.preco = preco
        Cardapio.cardapio.append({"nome" : this.nome,"preco" : this.preco})
  
    @staticmethod
    def exibeCardapio():    
        print(Cardapio.cardapio)




class ItemCardapio(Cardapio):
    def __init__(this, nome, preco) -> None:
        super().__init__(nome, preco)

