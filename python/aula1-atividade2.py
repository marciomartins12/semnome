dic = {
    "nome" : "Márcio",
    "idade" : 21,
    "email" : "marciom1martins635@gmail.com"
}

dic["idade"] = 0

dic["cpf"] = "123.123.123.12"

del dic["email"]
print(dic)

try:    
    if dic["chaveQueNaoExiste"]:
        print("a chave existe")
except:
        print("chave não existe")

# if "chaveQueNaoExiste" in dic:
#     print("a chave existe")
# else:
#     print("chave não existe")
        

frase = "marcio marcio jose martins"
contagem_palavras = {}
palavras = frase.split()
for palavra in palavras:
    contagem_palavras[palavra] = contagem_palavras.get(palavra, 0) + 1
    print(contagem_palavras)
print(contagem_palavras)
