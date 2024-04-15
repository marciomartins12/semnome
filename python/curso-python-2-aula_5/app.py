from modelos.restaurante import Restaurante
from modelos.cardapio import ItemCardapio, Cardapio



def main():
    restaurante_praca = Restaurante('praça', 'Gourmet')
   
    suco_de_Frutas = ItemCardapio("suco de amora", 2.50)
    prato_flango = ItemCardapio("flanguinho", 15)
    
    restaurante_praca.adiciona_prato(prato_flango)
    
    restaurante_praca.adiciona_bebida(suco_de_Frutas)
    
    
    
    restaurante_praca.exibe()
    
if __name__ == '__main__':
    main()



