from typing import Any


class Cardapio:
    def __init__(this, nome : str, preco : float) -> None:
        this.nome = nome
        this.preco = preco



class ItemCardapio(Cardapio):
    def __init__(this, nome, preco) -> None:
        super().__init__(nome, preco)

