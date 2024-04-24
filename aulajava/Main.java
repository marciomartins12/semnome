import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int cont = sc.nextInt();

        int []a = new int[cont];
        int []b = new int[cont];
        int []n = new int[cont];

        for (int i = 0; i < cont ; i++){

            int aV = sc.nextInt();
            int bV = sc.nextInt();
            int nV = sc.nextInt();

            a[i] = verificaValor(aV);
            b[i] = verificaValor(bV);
            n[i] = verificaValor(nV);
        }

        for (int i = 0; i < cont ; i++){

            int value = a[i];
            int multiplicador = 1;

            for(int j = 0; j < n[i]; j++){
                value = value + (multiplicador * b[i]);
                System.out.print(value + " ");
                multiplicador *= 2;
            }
            System.out.println("");
        }
    }
    public static int verificaValor(int x){
        if(x <=0){
            return 0;
        }else if(x >=500){
            return 500;
        }
        return x;

    }
}

