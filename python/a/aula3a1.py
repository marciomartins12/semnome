class Veiculo:
    marca = ''
    modelo = ''
    ligado = False
    def __init__(this, marca, modelo):
        this.marca = marca
        this.modelo = modelo
    def __str__(this):
        return f"marca: {this.marca}.\n modelo: {this.modelo} \n estado:{'ligado' if this.modelo == True else 'desligado'}"
    
    def exibemodelo(this):
        print(f"modelo = {this.modelo}")