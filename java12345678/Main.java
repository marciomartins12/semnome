import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        String path = "./text.csv";
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String index = "./";
            boolean suce = new File(index + "./subpasta").mkdir();
            System.out.println("criado" + suce);
            String subpasta = "./subpasta/arquivo.csv";

            try (BufferedWriter br2 = new BufferedWriter(new FileWriter(subpasta))) {
                String line = br.readLine();
                while(line != null){
                    String[] vetor  = line.split(",");
                    System.out.println("Saída vetor :" +Arrays.toString(vetor));
                    br2.write(vetor[0] + ", " + vetor[1]);
                    line = br.readLine();
                    br2.newLine();
                }
            }

        } catch (IOException e) {
            System.out.println("koki");
        }
    }
}