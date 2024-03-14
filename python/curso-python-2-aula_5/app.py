from modelos.restaurante import Restaurante
from modelos.cardapio import ItemCardapio, Cardapio
restaurante_praca = Restaurante('praça', 'Gourmet')
restaurante_praca.receber_avaliacao('Gui', 10)
restaurante_praca.receber_avaliacao('Lais', 8)
restaurante_praca.receber_avaliacao('Emy', 2)

def main():
    suco_de_Frutas = ItemCardapio("suco de amora", 2.50)

    suco_de_Frutas.exibeCardapio()
if __name__ == '__main__':
    main()



