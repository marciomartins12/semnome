public class Pessoa {
    private String email;
    private String name;
    int room;


    public Pessoa(String nome, String email, int quarto){
        this.name = nome;
        this.email = email;
        this.room = quarto;
    }

    public String toString(){
        return (
                "nome =" + this.name + ", email = " + this.email + ", Room = " + this.room + " vai te pra porra arthur"
        );
    }
}
