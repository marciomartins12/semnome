array = ["marcio", 22, 1.23]

print(array[0])
n = 4
for i in range(10 - n):
    print("Numero", i)


for index, i in enumerate(array, start=-12):
    print(f"valor do indice {index}: {i}")    