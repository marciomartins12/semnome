import java.util.Calendar;

public class Main {

    public static void main() {

        String TituloPost = "Viajar para Nova Zelândia";
        String Conteudo = "Eu vou visitar este país maravilhoso!";

        Calendar cal = Calendar.getInstance();
        cal.set(2002, 04, 25, 2, 24);

        // String Titulo, String Conteudo, int Likes, Date data
        Post instaDeKoki = new Post(TituloPost, Conteudo, cal);

        Comment firstComentariio = new Comment("Show de bola");
        Comment sComentariio = new Comment("aaaaaaaaaa");
        Comment tComentariio = new Comment("comentamt");

        instaDeKoki.SetItemNaListaDeComentarios(firstComentariio);
        instaDeKoki.SetItemNaListaDeComentarios(sComentariio);
        instaDeKoki.SetItemNaListaDeComentarios(tComentariio);

        System.err.println(instaDeKoki);
        instaDeKoki.getListaDeComentarios();
    }

}