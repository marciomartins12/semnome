import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner Scanf = new Scanner(System.in);
        System.out.println("Digite o nome do aluno");

        String nameAluno = Scanf.nextLine();

        System.out.println("Digite a idade do " + nameAluno);

        int idadeAluno = Scanf.nextInt();

        Turma computacao = new Turma(7, "8:00");

        Aluno donamorte = new Aluno(nameAluno, idadeAluno, computacao);

        donamorte.strngg();
        System.out.println(donamorte);
        System.out.println(Aluno.getNumeroDeContas());

        int a = 3, b = 9;
        double x = (double) a / b;
        System.out.println(x);
    }
}
