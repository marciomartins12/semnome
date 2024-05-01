package java123;

import java.util.ArrayList;
import java.util.List;

public class Funcionario {
    private String name;
    private Cargo cargo;
    private Departamento dep;
    private List<ContratoHora> listaDecargaHOOOOOraria = new ArrayList<>();

    public Funcionario( String n, Cargo c, Departamento d){
        this.name = n;
        this.cargo = c;
        this.dep = d;
    }

    public String toString(){
        return("name : " + this.name + "cargo" + this.cargo);
    }
    public void exibContatto(){
        for(ContratoHora x:listaDecargaHOOOOOraria){
            System.out.println(x);
           System.out.println("salario : " +  x.sadsdadadaddad());
        }
    }
    public void addContrato(ContratoHora c){
        this.listaDecargaHOOOOOraria.add(c);
    }
    public void rmContrato(ContratoHora c){
        this.listaDecargaHOOOOOraria.remove(c);
    }
  

}
