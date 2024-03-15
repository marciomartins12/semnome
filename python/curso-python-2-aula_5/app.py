from modelos.restaurante import Restaurante
from modelos.cardapio import ItemCardapio, Cardapio



def main():
    restaurante_praca = Restaurante('praça', 'Gourmet')
    restaurante_carne_de_flango = Restaurante("Carne de Flango", "Flangos")
    suco_de_Frutas = ItemCardapio("suco de amora", 2.50)
    prato_flango = ItemCardapio("flanguinho", 15)
    restaurante_praca.adiciona_prato(prato_flango.nome, prato_flango.preco, "plato de flango flito com molho")
    nome, preco = suco_de_Frutas.destruct()
    
    restaurante_praca.adiciona_bebida(nome, preco)
    
    
    
    restaurante_praca.exibe()
    
if __name__ == '__main__':
    main()



