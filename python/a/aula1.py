array = [1,2,3,4,5,6,7,8,9,10]

array_name = ['dona', 'camara']

array_date = [2002, 2024]

def percorrelista(array):
    for item in array:
        print(item)
        
def somaImpares(array):
    contador = 0
    for item in array:
        if item % 2 == 1:
            contador +=item
    print(f"Resultado: {contador}")
    
def tabuada(number):
    for i in range(10):
        print(f"{number} X {i} = {number*i}")  
def inputNumber():
    try:
        numero_digitado = int(input("digite um numero"))
        tabuada(numero_digitado)
    except:
        print("digite um numero válido.")
        inputNumber()


def mediaValores(array):
    contador = 0
    try:
        for item in array:
            contador += item
        resultado = contador / len(array)
        print(resultado)
    except ZeroDivisionError:
        print("não é possivel pois o array não possui nada, então não consigo dividir por zero e saber a média")
    except:    
        print("erro inesperado")

print(          
"dona" if "dona" == "com" else "sem")
#mediaValores(array)
#inputNumber()
#somaImpares(array)
#percorrelista(array)
