import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Post {
    private static SimpleDateFormat dtf = new SimpleDateFormat("dd/MM/yyyy");

    private String moment;
        private String content;
        private String title;
        private int likes;
        private List<Comment> comments = new ArrayList<>();


        public Post(String conteudo, String titulo, Date data){
            this.content = conteudo;
            this.moment = dtf.format(data);
            this.title = titulo;
        }
        public void addLike(){
            this.likes += 1;
        }


        public void addComentario(Comment x){
            comments.add(x);
        }

        public String toString() {
            getCommentarios();
            return "Title : " + this.title +
                    "Content : " + this.content +
                    "Date : " + this.moment;

        }

    private void getCommentarios(){
            System.out.println("Comentarios : \n");
            for( Comment i : this.comments){
                System.out.println(i.getText());

            }
        }


}
