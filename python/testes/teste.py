array = ["marcio", 22, 1.23]

print(array[0])
n = 4
for i in range(10 - n):
    print("Numero", i)


for a, i in enumerate(array, start=-12):
    print(f"valor do indice {a}: {i}")    

def modificaValue(valor):
    valor = 25
    print("valor na função", valor)

valor =2
modificaValue(valor)

print("Valor fora da função ",valor)


array2 = [1,3,1,2,3,4,4,5,55,23,32]

array2.sort()
arraySort = array2
print(array2)


koki = "i"

print("k" in ("l" or koki))

print("koki", "koki")
print("koki" + "koki")

print("k" == "k")

if "k" in koki:
    print("aaaaaaaa")
elif "i" in koki:
    print("bbbbbbbb")


a = 0
if a:
    print("valor:",a)
    print("m'")
else:
    print(" sem valor")