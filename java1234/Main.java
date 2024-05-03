import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("name ->");
        String name = sc.nextLine();

        System.out.println("Valor ->");
        double value = sc.nextDouble();
        sc.nextLine();

        System.out.println("taxa ->");
        double taxa = sc.nextDouble();
        sc.nextLine();
        Product pp1 = new ImportedProduct(name, value, taxa);
            pp1.getInf();
            sc.close();
    }
}