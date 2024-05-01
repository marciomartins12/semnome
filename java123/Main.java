package java123;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        Departamento d = new Departamento("Diretoria");
        Funcionario k = new Funcionario("koki", Cargo.SENIOR, d);

        ContratoHora n = new ContratoHora(new Date(), 150.00, 10);
        k.addContrato(n);
        System.out.println(k);
        k.exibContatto();

    }
}