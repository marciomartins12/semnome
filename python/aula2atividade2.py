class Livro:
    titulo = ''
    ano = ''
    autor = ''
    disponivel = True
    def __init__(this, titulo, ano, autor):
        this.titulo = titulo
        this.ano = ano 
        this.autor = autor
    def __str__(this):
        return f"O autor: {this.autor}, Titulo: {this.titulo}, ano que foi publicado: {this.ano} e está {'disponivel' if this.disponivel == True else 'indisponivel'}"
    def emprestar(this):
        this.disponivel = not this.disponivel


def teste():
    livro1 = Livro("Rush rush", "20/20/1012", "jhon")
    livro1.emprestar()
    livro2 = Livro("Harry Potter", "10/10/1999", "j.k Rouling")

    print(livro1)
    print(livro2)

