package java123456.entities;

import java.util.concurrent.ExecutionException;

public class Acount {
    private int number;
    private String Holder;
    private Double balance;
    private Double withdrawLimit;
    
    public Acount(){
      
    }
    public Acount(int i, String s, Double b, Double w){
        this.number = i;
        this.Holder = s;
        this.balance = b;
        this.withdrawLimit = w; 
    }

    public void deposit(Double amount){
        if(amount < 0){
            throw new ExceptionInInitializerError("valorInvalido");
        }else
        this.balance += amount;
        
    }
    
    
    public void withdraw(Double amount){
        if(this.balance == 0.0 || amount > this.balance || amount == 0 ){
            throw new Error(); 
        }else
            this.balance -= amount;
    }

}
