package appilcation;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class Main{
public static void main(String[] args) {
    File fle = new File("C:\\Users\\marciomartins12\\Documents\\java\\semNome\\java1234567\\text.txt");

    Scanner sc = null;
    
    try{
        sc = new Scanner(fle);

        while(sc.hasNextLine()){
            System.out.println(sc.nextLine());
        }
    }catch(IOException e){
        System.out.println("error : " + e.getMessage());
    }
    finally{
        System.out.println("gogogogog");
        if(sc != null)
        sc.close();
    }

}
}