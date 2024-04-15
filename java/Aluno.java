
public class Aluno {
    private String nome;
    int idade;
    Turma sala;
    static int numerodeContas;

    public Aluno(String nome, int idade, Turma sala) {
        this.nome = nome;
        this.idade = idade;
        this.sala = sala;
        Aluno.numerodeContas++;
    }

    public String toString() {
        return ("123456  = 123456" +
                "nome  =" + this.nome +
                "idade =" + this.idade);
    }

    void strngg() {
        System.out.println("O lendario " + this.nome);
    }

    public static int getNumeroDeContas() {
        return Aluno.numerodeContas;
    }
}
