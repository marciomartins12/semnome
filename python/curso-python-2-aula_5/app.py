from modelos.restaurante import Restaurante
from modelos.cardapio import ItemCardapio, Cardapio



def main():
    restaurante_praca = Restaurante('praça', 'Gourmet')
    restaurante_praca.receber_avaliacao('Gui', 5)
    suco_de_Frutas = ItemCardapio("suco de amora", 2.50)
    restaurante_praca.adiciona_bebida(suco_de_Frutas)
    Restaurante.exibe()
    
if __name__ == '__main__':
    main()



