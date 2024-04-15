
public class Main {
    public static void main(String[] args) {
        Turma computacao = new Turma(7, "8:00");

        Aluno donamorte = new Aluno("donamorte", 32, computacao);

        donamorte.strngg();
        System.out.println(donamorte);
        Aluno.getNumeroDeContas();
    }
}
