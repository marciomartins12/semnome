import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Main {
public static void main(String[] args){
    Scanner sc = new Scanner(System.in);

    SimpleDateFormat dtf = new SimpleDateFormat("dd/MM/yyyy");


    System.out.println("Digite o titulo : ");
        String titulo = sc.nextLine();

    System.out.println("Conteudo desse titulo : ");
        String conteudo = sc.nextLine();

    System.out.println("Dgite a data Formato (dd/MM/yyyy) :");
        String dataString = sc.next();
        sc.nextLine();
    Date dataFormatada = null;

    System.out.println("Adicione Comentarios : ");
        Comment Comentario = new Comment(sc.nextLine());
    Comment Comentario2 = new Comment(sc.nextLine());

        try{
           dataFormatada = dtf.parse(dataString);
           Post post1 = new Post(conteudo, titulo, dataFormatada);

           post1.addComentario(Comentario);
           post1.addComentario(Comentario2);

            System.out.println(post1);




        }catch(ParseException e){
            System.out.println("Data invalida");
        }

sc.close();
}
}
