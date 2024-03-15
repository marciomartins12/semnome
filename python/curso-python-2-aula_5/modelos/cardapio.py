from typing import Any


class Cardapio:
    def __init__(this, nome : str, preco : float) -> None:
        this.nome = nome
        this.preco = preco
    def destruct(self):
        return self.nome, self.preco



class ItemCardapio(Cardapio):
    def __init__(this, nome, preco) -> None:
        super().__init__(nome, preco)

