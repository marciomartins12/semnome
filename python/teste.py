class Restaurante:
    def __init__(self, nome):
        self.nome = nome
        self.cardapio = []

    def adicionar_item(self, item):
        self.cardapio.append(item)

class ItemRestaurante:
    def __init__(self, nome, tipo, preco):
        self.nome = nome
        self.tipo = tipo  # 'Bebida' ou 'Prato'
        self.preco = preco

class Cliente:
    def __init__(self, endereco, forma_pagamento, cpf):
        self.endereco = endereco
        self.forma_pagamento = forma_pagamento
        self.cpf = cpf

    def fazer_pedido(self, restaurante, item):
        print(f"Pedido feito por {self.cpf}: {item.nome} de {restaurante.nome}.")

# Criando alguns restaurantes e adicionando itens ao cardápio
restaurante1 = Restaurante("Restaurante A")
restaurante1.adicionar_item(ItemRestaurante("Refrigerante", "Bebida", 5))
restaurante1.adicionar_item(ItemRestaurante("Pizza", "Prato", 20))

restaurante2 = Restaurante("Restaurante B")
restaurante2.adicionar_item(ItemRestaurante("Suco", "Bebida", 4))
restaurante2.adicionar_item(ItemRestaurante("Hamburguer", "Prato", 15))

# Criando um cliente
cliente1 = Cliente("Rua X, número Y", "Cartão de crédito", "123.456.789-00")

# Listando os restaurantes
print("Restaurantes disponíveis:")
print(f"1. {restaurante1.nome}")
print(f"2. {restaurante2.nome}")

# Acessando o cardápio de um restaurante
print("\nCardápio do Restaurante A:")
for item in restaurante1.cardapio:
    print(f"{item.nome} - {item.tipo} - R${item.preco}")

# Acessando todas as comidas de todos os restaurantes
print("\nTodas as comidas disponíveis:")
for restaurante in [restaurante1, restaurante2]:
    for item in restaurante.cardapio:
        print(f"{item.nome} - {item.tipo} - R${item.preco}")

# Fazendo um pedido
pedido_cliente1 = restaurante1.cardapio[1]  # Pedido de uma pizza no Restaurante A
cliente1.fazer_pedido(restaurante1, pedido_cliente1)
