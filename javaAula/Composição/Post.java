
import java.util.ArrayList;
import java.util.Calendar;

public class Post {
    private String dataHora;
    private String Title;
    private String Content;
    private int likes = 0;
    private ArrayList<Comment> listaDeComentarios = new ArrayList<>();

    public Post(String Titulo, String Conteudo, Calendar data){
        this.Content = Conteudo;
        this.Title = Titulo;
        this.dataHora = String.valueOf(data.getTime());
      
    };

    public void setLikes(int likes) {
        this.likes += likes;
    }
   
    public void SetItemNaListaDeComentarios (Comment comentario){
        listaDeComentarios.add(comentario);
    }

    public String toString() {
        
        return (
            "\n\n\nTitulo comentario : " + this.Title +
        "\nConteudo comentario : " + this.Content + 
        "\ndata : " + this.dataHora +
        "\nLikes : " + this.likes + "."
        );
    }

    public void getListaDeComentarios(){
        for (Comment x: this.listaDeComentarios){

            System.err.println(x);
            

        }
    }
}