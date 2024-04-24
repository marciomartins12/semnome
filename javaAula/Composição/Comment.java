public class Comment {
    private String text;

public Comment(String comentario){
    this.text = comentario;
}
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

   
    public String toString() {
        return ("conteudo do comentario : '" + this.text + "'");
    }
}
